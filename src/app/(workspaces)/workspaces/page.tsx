import { notFound } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { workspace } from "@/types/db"
import { WorkSpaceCard } from "@/components/workspace/workspace-card"

export default async function Dashboard() {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <main className="">
      oops
    </main>
  )
}