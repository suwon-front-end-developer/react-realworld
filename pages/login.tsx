import "twin.macro";
import { NextPage } from "next";
import LoginForm from "templates/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <>
      <div tw="py-8 px-4 mx-auto max-w-screen-lg">
        <div tw="text-center">
          <h1 tw="text-4xl">Sign in</h1>
          <a href="#">Need an account?</a>
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
