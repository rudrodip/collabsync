import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WorkspaceCardProps = {
  id: string;
  creator: string;
  name: string;
  pending: number;
  uploaded: number;
};

export const WorkSpaceCard = ({
  id,
  creator,
  name,
  pending,
  uploaded,
}: WorkspaceCardProps) => {
  return (
    <Link href={`/workspaces/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>ID: {id}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Creator: {creator}</p>
          <p>Pending: {pending}</p>
          <p>Uploaded: {uploaded}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
