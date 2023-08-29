import { NextRequest } from "next/server";
import { nanoid } from "nanoid";
import { redis } from "@/app/lib/redis";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, tags } = body;

    const commentId = nanoid();

    // add comment to a list

    await redis.rpush("comments", commentId);

    return new Response("OK");
  } catch (err) {
    console.log(err);
  }
}
