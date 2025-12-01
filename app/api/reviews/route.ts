import { db } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const start = Number(searchParams.get("start") ?? 0);
  const limit = Number(searchParams.get("limit") ?? db.reviews.length);

  const sliced = db.reviews.slice(start, start + limit);

  const data = sliced.map((review) => ({
    ...review,
    user: db.users.find(user => user.id === review.userId),
  }));

  return NextResponse.json({
    reviews: data,
    total: db.reviews.length,
  });
}
