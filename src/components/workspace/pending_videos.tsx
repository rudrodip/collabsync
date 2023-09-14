import { env } from "@env.mjs";
import { video } from "@/types/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PendingVideosProps = {
  workspaceId: string;
};

type ResponseJSON = {
  videos: {
    pending: video[];
    uploaded: video[];
  };
};

export const PendingVideos = async ({ workspaceId }: PendingVideosProps) => {
  const videos = await fetch(
    `${env.BACKEND_API_URL}/workspace/videos/${workspaceId}`
  );
  const data: ResponseJSON = await videos.json();
  return (
    <div className={data.videos.pending.length > 0 ? '' : 'hidden'}>
      <h1>Pending videos</h1>
      <div className="my-2 flex flex-wrap gap-2">
        {data.videos.pending.map((video, _) => {
          return (
            <Card key={video.id}>
              <CardHeader>
                <CardTitle>{video.metadata.title}</CardTitle>
                <CardDescription>ID: {video.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Uploader: {video.uploader}</p>
                <p>Pending</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
