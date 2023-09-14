import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WorkspaceCardProps = {
  id: string;
  name: string;
  image: string;
  customUrl: string;
};

export const ChannelCard = ({
  id,
  name,
  image,
  customUrl,
}: WorkspaceCardProps) => {
  return (
    <a target="_blank" href={`https://www.youtube.com/channel//${id}`} className="hover:scale-105 p-5 m-5 transition-all duration-75 ease-in-out">
      <Card className="flex flex-col justify-center items-center">
        <CardContent>
          <Image
            src={image}
            alt="channelicon"
            width={120}
            height={120}
            className="rounded-full border-dashed border-2 border-primary"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardFooter>
          <p>{customUrl}</p>
        </CardFooter>
      </Card>
    </a>
  );
};
