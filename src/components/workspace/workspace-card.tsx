import Link from "next/link";

type WorkspaceCardProps = {
  id: string;
  name: string;
  pending: number;
  uploaded: number;
};

export const WorkSpaceCard = ({
  id,
  name,
  pending,
  uploaded,
}: WorkspaceCardProps) => {
  return (
    <div className="p-3 m-3 rounded-lg border-2 border-primary">
      <Link href={`/workspace/${id}`}>
        <p>Name: {name}</p>
        <p>Pending: {pending}</p>
        <p>Uploaded: {uploaded}</p>
      </Link>
    </div>
  );
};
