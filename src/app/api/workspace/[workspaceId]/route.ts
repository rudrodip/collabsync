import { env } from "@env.mjs";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { workspaceId: string } }
) {
  const workspaceId = params.workspaceId;
  const raw = true;
  const token = await getToken({ req, raw });
  if (token) {
    try {
      const res = await fetch(
        `${env.BACKEND_API_URL}/workspace/${workspaceId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": token.toString(),
          },
        }
      );

      const data = await res.json();
      return NextResponse.json(data);
    } catch (error) {
      console.error('Error:', error);
      return new Response("Internal Server Error", { status: 500 });
    }
  } else {
    // Not Signed in
    return new Response("Unauthorized", { status: 401 });
  }
}
