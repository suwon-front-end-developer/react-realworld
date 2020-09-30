import { Author } from "@/types/Author";

export interface Articles {
  articles: Article[];
  articlesCount: number;
}

export interface Article {
  title: string;
  slug: string;
  body: string;
  tagList: string[];
  author: Author;
  description: string;
  favorited: boolean;
  favoritessCount: number;
  createdAt: string;
  updatedAt: string;
}
