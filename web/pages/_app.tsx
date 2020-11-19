import Amplify from "aws-amplify";
import { AppProps } from "next/app";
import { FC } from "react";
import { getLayout as getDefaultLayout } from "../components/layouts";
// Load TailwindCSS and make it available throughout our app.
import "../styles/index.css";
/**
 * Make sure you have run `amplify configure` and imported your user pool with `amplify import auth` or this file will not be generated.
 */
import awsConfig from "../config/aws-exports";

Amplify.configure({ ...awsConfig, ssr: true });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Because we can arbitrarily  assign attributres to our page components, we will cast it as any to avoid type errors until I can conveive of a better solution.
  const getLayout = (Component as any).getLayout ?? getDefaultLayout;

  return getLayout(<Component {...pageProps} />);
};

export default App;
