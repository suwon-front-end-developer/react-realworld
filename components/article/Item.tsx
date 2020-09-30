import "twin.macro";

type Props = {
  title: string;
  description: string;
  role?: string;
};

export default function FeedItem({ title, description, role }: Props) {
  return (
    <div tw="my-4 border border-solid border-black first:mt-0" role={role}>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
