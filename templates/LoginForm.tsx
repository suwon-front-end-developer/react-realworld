import { useState, useCallback, FormEvent, FunctionComponent } from "react";
import "twin.macro";
import Input from "components/Input";
import Button from "components/Button";

const LoginForm: FunctionComponent = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend tw="sr-only">Login Form</legend>
        <div tw="mt-2">
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
            block
          />
        </div>
        <div tw="mt-2">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
            block
          />
        </div>
        <div tw="mt-2 text-right">
          <Button>Sign in</Button>
        </div>
        <pre>{JSON.stringify(inputs)}</pre>
      </fieldset>
    </form>
  );
};

export default LoginForm;
