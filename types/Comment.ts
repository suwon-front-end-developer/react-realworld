import { Author } from "@/types/Author";

export interface Comments {
  comments: Comment[];
}

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
}
