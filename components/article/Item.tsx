import "twin.macro";
import Link from "next/link";
import { ArticleType } from "types/Article";

type Props = {
  article: ArticleType;
};

export default function ArticleItem({ article }: Props) {
  return (
    <div tw="px-2 py-6 border-t border-solid border-gray-400 first:mt-0">
      <div tw="flex items-center">
        <img
          src={article.author.image}
          alt={article.author.username}
          tw="rounded-full w-8 h-8 mr-2"
        />
        <div tw="flex flex-col">
          <Link href="/[user]" passHref as={`/@${article.author.username}`}>
            <a>
              <strong tw="font-normal text-green-600 hover:text-green-800">
                {article.author.username}
              </strong>
            </a>
          </Link>
          <span tw="text-xs text-gray-500">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <div tw="mt-4">
        <strong>{article.title}</strong>
        <p tw="m-0">{article.description}</p>
      </div>
    </div>
  );
}
