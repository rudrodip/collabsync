"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { addVideoMetadata, clearVideoMetadata } from "@/redux/slices/youtubeVideo";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { uploadFile } from "@/db/upload-video";
import { metadata } from "@/types/db";

type CreateVideoProps = {
  uploaderId: string;
  workspaceId: string;
};

const formSchema = z.object({
  Title: z.string().min(0, {
    message: "Title must be at least 2 characters.",
  }),
  Description: z.string().max(20, {
    message: "Description must be less than 20 characters.",
  }),
  Privacy: z.enum(["public", "private"]).default("public"),
});

export const CreateVideo = ({ uploaderId, workspaceId }: CreateVideoProps) => {
  const [progress, setProgress] = useState(0)
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector(
    (state) => state.workspaceSlice
  );
  const { video, thumbnail } = useAppSelector((state) => state.videoSlice);
  const { title, desc, privacy } = useAppSelector(
    (state) => state.youtubeVideo
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: title,
      Description: desc,
      Privacy: privacy,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const metadata: metadata = {
      title: title,
      desc: desc,
      privacyStatus: privacy,
      tags: ["testtag1"],
    };
    if (video) {
      uploadFile(uploaderId, workspaceId, metadata, video, (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total || 0)
        );
        setProgress(percentCompleted)
      }, thumbnail)
        .then((res) => {
          clearVideoMetadata()
          console.log(res)
        });
    }
  }

  function onChange(values: z.infer<typeof formSchema>) {
    dispatch(
      addVideoMetadata({
        title: values.Title,
        desc: values.Description,
        privacy: values.Privacy,
      })
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onChange={form.handleSubmit(onChange)}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="Title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} value={title} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="video description"
                      {...field}
                      value={desc}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Privacy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Privacy</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={privacy}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Public" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              variant={isError ? "destructive" : "default"}
            >
              {isLoading && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Upload
            </Button>
          </form>
        </Form>
        {
          progress > 0 && progress < 100 &&
          <div>
            <p>Uploading.... {progress}%</p>
            <Progress value={progress} className="w-full" />
          </div>
        }
        {
          progress == 100 && <p>Uploaded sucessfully</p>
        }
      </CardContent>
    </Card>
  );
};
