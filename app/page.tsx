import CommunitySection from "@/components/sections/home/CommunitySection";
import FeaturedAlbum from "@/components/sections/home/FeaturedAlbum";
import FeaturedArtist from "@/components/sections/home/FeaturedArtist";
import Genres from "@/components/sections/home/Genres";
import LatestReviews from "@/components/sections/home/LatestReviews";
import TopAlbums from "@/components/sections/home/TopAlbums";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-rows-2 gap-8">
      <section className="grid grid-rows-2 gap-4">
        <FeaturedAlbum />
        <TopAlbums />
      </section>
      <section className="grid grid-rows-2 gap-4">
        <LatestReviews />
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="grid grid-rows-2 gap-4">
            <Genres />
            <CommunitySection />
          </div>
          <FeaturedArtist />
        </div>
      </section>
    </main>
  );
}
