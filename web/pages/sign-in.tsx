import { SignInParameters } from "../auth/sign-in";
import { SignInForm } from "../components/Auth/SignInForm";

const SignInPage = () => {
  const handleSignIn = ({ email, password }: Partial<SignInParameters>) => {
    console.log("sign in", email, password);
  };

  return (
    <>
      <SignInForm onSubmit={handleSignIn} />
    </>
  );
};

export default SignInPage;
