import AlbumCard from "@/components/sections/albums/AlbumCard";
import TrackList from "@/components/sections/albums/TrackList";
import CommunitySection from "@/components/sections/home/CommunitySection";
import { AlbumDetailDTO } from "@/types/album";

export const revalidate = 60 * 60 * 24;

export default async function AlbumPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/albums/${id}`,
    {
      next: { revalidate: 60 * 60 * 24 },
    }
  );

  const { album, artist, tracks } = await res.json();
  console.log(album);
  return (
    <div>
      <AlbumCard cover={album.cover} title={album.title} artist={artist.name} />
      <TrackList tracks={tracks} />
      {/* <Review review={album.artist}/> */}
      <CommunitySection />
    </div>
  );
}
