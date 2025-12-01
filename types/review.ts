import { User } from "./user";

export interface Review {
  id: string;
  title: string;
  desc: string;
  summary: string;
  rating: number;
  createdAt: Date;
  userId: string;
  albumId: string;
}

export interface ReviewDTO extends Pick<Review, "id" | "summary" | "rating"> {
  user: User;
}
