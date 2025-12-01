import { db } from '@/lib/data';
import { NextResponse } from "next/server";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const start = Number(searchParams.get("start") ?? 0);
  const limit = Number(searchParams.get("limit") ?? db.albums.length);

  const sliced = db.albums.slice(start, start + limit);

  const data = sliced.map((album) => ({
    ...album,
    artist: db.artists.find((artist) => artist.id === album.artistId),
  }));

  return NextResponse.json({
    albums: data,
    total: db.albums.length,
  });
}
