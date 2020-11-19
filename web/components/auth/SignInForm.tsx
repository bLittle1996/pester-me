import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface Props {
  onSubmit: SubmitHandler<Record<string, any>>;
}

export const SignInForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        placeholder="Enter your email..."
        ref={register}
      ></input>

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        ref={register}
      ></input>

      <pre>{JSON.stringify(errors, null, 2)}</pre>

      <button type="reset">Reset</button>
      <button type="submit">Sign In</button>
    </form>
  );
};
