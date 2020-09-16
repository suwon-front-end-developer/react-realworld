export interface IArticles {
  articles: ArticleType[];
  articlesCount: number;
}

export type ArticleType = {
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
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
