"use client";

import { useAppSelector } from "@/redux/hooks";
import { CreateVideo } from "@/components/workspace/create-video-form";
import { Separator } from "@/components/ui/separator";
import { ThumbnailUploader } from "@/components/files/thumbnail-upload";

export const VideoSection = ({
  uploaderId,
  workspaceId,
}: {
  uploaderId: string;
  workspaceId: string;
}) => {
  const { url } = useAppSelector((state) => state.videoSlice);

  if (!url) return "";
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-2">
      <div className="col-span-1">
        <CreateVideo uploaderId={uploaderId} workspaceId={workspaceId} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-heading text-center">Thumbnail</h1>
        <Separator className="my-3" />
        <ThumbnailUploader />
      </div>
    </section>
  );
};
