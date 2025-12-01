import { Track } from "@/types/track";

export default function TrackList({ tracks }: { tracks: Track[] }) {
  return (
    <div>
      <ol className="list-decimal pl-6 space-y-1">
        {tracks.map((track: Track) => (
          <li key={track.id} className="text-gray-800">
            {track.title}
            <span className="text-gray-500 ml-2">(track.duration)</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
