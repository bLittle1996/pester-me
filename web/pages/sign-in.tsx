import { SignInParameters } from "../auth/sign-in";
import { SignInForm } from "../components/auth/SignInForm";
import { Card } from "../components/containers/Card";

const SignInPage = () => {
  const handleSignIn = ({ email, password }: Partial<SignInParameters>) => {
    console.log("sign in", email, password);
  };

  return (
    <>
      <Card>
        <SignInForm onSubmit={handleSignIn} />
      </Card>
    </>
  );
};

export default SignInPage;
