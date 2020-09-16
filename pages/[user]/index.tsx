import { useRouter, NextRouter } from "next/router";
import { NextPage } from "next";

const ProfilePage: NextPage = () => {
  const router: NextRouter = useRouter();
  const user = router.query.user;
  const isUser = user && (user as string).match(/^@(.+)?/);
  return <>{isUser ? <h1>{user}</h1> : <h1>유저가 없다;</h1>}</>;
};

export default ProfilePage;
