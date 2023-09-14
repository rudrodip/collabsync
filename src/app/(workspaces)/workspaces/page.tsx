import { WorkspaceGallery } from "@/components/workspace/workspace-gallery"
import { getCurrentUser } from "@/lib/session"
import { notFound } from "next/navigation"

export default async function Dashboard() {
  const user = await getCurrentUser()
  
  if (!user){
    notFound()
  }
  return (
    <main className="">
      <WorkspaceGallery userId={user.id} />
    </main>
  )
}