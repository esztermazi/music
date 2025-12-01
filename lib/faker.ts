import { Album } from "@/types/album";
import { Review } from "@/types/review";
import type { User } from "@/types/user";
import { faker } from "@faker-js/faker";
import { USER_COUNT } from "./constants";
import { Track } from "@/types/track";
import { Artist } from "@/types/artist";

export function createUsers(count = USER_COUNT): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
  }));
}

export function createReview(userId: string, albumId: string): Review {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words({ min: 1, max: 3 }),
    desc: faker.lorem.sentences(3),
    summary: faker.lorem.sentences(1),
    rating: faker.number.int({ min: 1, max: 5 }),
    createdAt: faker.date.recent({ days: 60 }),
    userId,
    albumId,
  };
}

export function createArtists(count = 8) {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      genre: faker.music.genre(),
      image: `https://source.unsplash.com/random/600x600/?artist,music`,
  }));
}

export function createAlbum(artistId: string): Album {
  return {
    id: faker.string.uuid(),
    title: faker.music.album(),
    rating: faker.number.int({ min: 1, max: 5 }),
    releaseYear: faker.number.int({ min: 1980, max: 2024 }),
    cover: faker.image.urlPicsumPhotos(),
    artistId,
  };
}

export function createTrack(albumId: string, trackNumber: number): Track {
  return {
    id: faker.string.uuid(),
    title: faker.music.songName(),
    duration: faker.number.int({ min: 120, max: 320 }),
    trackNumber,
    albumId,
  };
}

export function createData(
  albumCount : number,
  tracksPerAlbum : number
) {
  const users : User[] = createUsers();
  const artists : Artist[] = createArtists();
  const albums : Album[] = Array.from({ length: albumCount }, () => {
    const artist = artists[Math.floor(Math.random() * artists.length)];
    return createAlbum(artist.id);
  });

  const tracks : Track[] = albums.flatMap((album) =>
    Array.from({ length: tracksPerAlbum }, (_, i) =>
      createTrack(album.id, i + 1)
    )
  );

  const reviews : Review[] = albums.map((album) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    return createReview(randomUser.id, album.id);
  });

  return {
    users,
    artists,
    albums,
    tracks,
    reviews
  };
}
