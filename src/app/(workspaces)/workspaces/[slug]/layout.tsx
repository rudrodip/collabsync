import ChatWindow from "@/components/chat/chat-window";

interface WorkspaceLayoutProps {
  children?: React.ReactNode;
}

export default async function WorkspaceLayout({
  children,
}: WorkspaceLayoutProps) {
  return (
    <>
      <ChatWindow />
      {children}
    </>
  );
}
