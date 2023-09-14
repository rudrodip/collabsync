"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { createWorkspace } from "@/redux/slices/workspaceSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

type CreateWorkspaceProps = {
  id: string;
};

const formSchema = z.object({
  WorkspaceName: z.string().min(2, {
    message: "Workspace name must be at least 2 characters.",
  }),
});

export const CreateWorkspace = ({ id }: CreateWorkspaceProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector(
    (state) => state.workspaceSlice
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      WorkspaceName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(
      createWorkspace({ workspaceName: values.WorkspaceName, userId: id })
    ).then(() => setOpen(false));
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="flex justify-center items-center cursor-pointer bg-primary text-secondary hover:border-primary hover:scale-105 duration-100 ease-in-out p-10">
          <p className="text-center font-heading text-xl">Create New Workspace</p>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
          <DialogDescription>
            Create a new workspace for your youtube channel here.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="WorkspaceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workspace Name</FormLabel>
                  <FormControl>
                    <Input placeholder="workspace" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public workspace name.
                  </FormDescription>
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
              Create
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
