import { AuthorType } from "types/Author";

export interface CommentsType {
  comments: CommentType[];
}

export interface CommentType {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: AuthorType;
}
