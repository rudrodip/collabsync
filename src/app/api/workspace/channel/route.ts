import { env } from "@env.mjs";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const raw = true;
  const token = await getToken({ req, raw });
  const reqBody = await req.json();

  if (token) {
    try {
      const res = await fetch(
        `${env.BACKEND_API_URL}/workspace/channel`,
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": token.toString(),
          },
          body: JSON.stringify(reqBody)
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
