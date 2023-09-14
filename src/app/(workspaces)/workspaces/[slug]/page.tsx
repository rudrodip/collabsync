import VideoUploader from "@/components/files/file-upload";
import { VideoMini } from "@/components/video/video-mini";
import WorkspaceDetails from "@/components/workspace/workspace-details";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
import { VideoSection } from "@/components/workspace/video-metadata-section";
import { PendingVideos } from "@/components/workspace/pending_videos";
import { Separator } from "@/components/ui/separator";

type WorkspaceProps = {
  params: {
    slug: string;
  };
};

export default async function Workspace({ params }: WorkspaceProps) {
  const id = params.slug;
  const user = await getCurrentUser()

  if (!user){
    notFound()
  }

  return (
    <main className="">
      <PendingVideos workspaceId={id} />
      <Separator className="my-5" />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div id="upload" className="w-auto col-span-2">
          <VideoUploader />
        </div>
       <WorkspaceDetails userId={user.id} workspaceId={id} />
      </section>
      <Separator className="my-5" />
      <VideoSection uploaderId={user.id} workspaceId={id} />
    </main>
  );
}
