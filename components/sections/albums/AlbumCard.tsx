import Image from "next/image";

type AlbumCardProps = {
  cover: string;
  artist: string;
  title: string;
};

export default function AlbumCard({ cover, artist, title }: AlbumCardProps) {
  return (
    <div className="max-w-xs border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600">{artist}</p>
    </div>
  );
}
