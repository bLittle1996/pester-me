import { Auth } from "aws-amplify";

export interface SignInParameters {
  email: string;
  password: string;
}

export const signIn = ({ email, password }: SignInParameters) => {
  return Auth.signIn(email, password);
};
