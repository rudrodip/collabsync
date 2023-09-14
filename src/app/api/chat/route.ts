import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { env } from "@env.mjs";
import { getToken } from "next-auth/jwt";
import { NextRequest } from 'next/server';

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: NextRequest) {
  const json = await req.json()
  const { messages, previewToken } = json
  const token = await getToken({ req });
  if (!token) {
    return new Response('Unauthorized', {
      status: 401
    })
  }

  const userId = token.id

  if (previewToken) {
    configuration.apiKey = previewToken
  }

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    stream: true
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? userId
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
    }
  })

  return new StreamingTextResponse(stream)
}