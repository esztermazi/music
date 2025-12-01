import { Artist } from "./artist";
import { Track } from "./track";

export interface Album {
  id: string;
  title: string;
  rating: number;
  releaseYear: number;
  cover: string;
  artistId: string;
}

export interface AlbumDTO extends Album {
  artist: Artist;
}

export interface AlbumDetailDTO extends AlbumDTO {
  trackList: Array<Track>;
}
