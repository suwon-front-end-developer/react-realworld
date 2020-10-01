import { ReactElement } from "react";
import "twin.macro";
import Link from "next/link";
import { ArticleType } from "types/Article";

type Props = {
  article: ArticleType;
  role?: string;
};

export default function ArticleItem({ article, role }: Props): ReactElement {
  return (
    <div
      tw="px-2 py-6 border-t border-solid border-gray-400 first:mt-0"
      role={role}
    >
      <div tw="flex items-center leading-none">
        <img
          src={article.author.image}
          alt={article.author.username}
          tw="rounded-full w-8 h-8 mr-2"
        />
        <div tw="flex flex-col">
          <Link href="/[user]" as={`/@${article.author.username}`} passHref>
            <a tw="text-green-600 hover:text-green-800">
              <strong tw="font-normal">{article.author.username}</strong>
            </a>
          </Link>
          <span tw="mt-1 text-xs text-gray-500">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <Link href="/article/[pid]" as={`/article/${article.slug}`}>
        <a>
          <div tw="mt-4">
            <strong tw="text-2xl">{article.title}</strong>
            <p tw="m-0 text-gray-600">{article.description}</p>
          </div>
          <div tw="mt-4 flex items-center">
            <span tw="flex-1 mr-4 text-xs text-gray-500 whitespace-no-wrap">
              Read More...
            </span>
            {article.tagList && (
              <div tw="-my-1" role="list">
                {article.tagList?.map((tag) => (
                  <Link href={`/?tag=${tag}`} passHref>
                    <a
                      tw="ml-2 my-1 inline-block border border-gray-500 rounded-full px-2 py-1 text-xs text-gray-500 hover:border-green-600 hover:text-green-600"
                      role="listitem"
                    >
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
}
