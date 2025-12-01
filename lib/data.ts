import { ALBUMS_COUNT, TRACK_COUNT } from "./constants";
import { createData } from "./faker";

declare global {
  var __db: ReturnType<typeof createData> | undefined;
}

export const db =
  globalThis.__db ??
  (globalThis.__db = createData(ALBUMS_COUNT, TRACK_COUNT));