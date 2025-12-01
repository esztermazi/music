export const runtime = "nodejs";
import { db } from "@/lib/data";
import { Album } from "@/types/album";
import { Artist } from "@/types/artist";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const album = db.albums.find((album: Album) => album.id === id);
  if (!album) {
    return NextResponse.json(
      { error: "Album not found" },
      { status: 404 }
    );
  }

  const artist = db.artists.find((artist: Artist) => artist.id === album.artistId);

  const tracks = db.tracks
    .filter((track) => track.albumId === id)
    .sort((a, b) => a.trackNumber - b.trackNumber);

  const review = db.reviews.find((rev) => rev.albumId === id);
  const user = review
    ? db.users.find((u) => u.id === review.userId)
    : null;

  return NextResponse.json({
    album,
    artist,
    tracks,
    review: review
      ? {
          ...review,
          user,
        }
      : null,
  });
}
