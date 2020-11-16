import Amplify from "aws-amplify";
import { AppProps } from "next/app";
import { FC } from "react";
/**
 * Make sure you have run `amplify configure` and imported your user pool with `amplify import auth` or this file will not be generated.
 */
import awsConfig from "../config/aws-exports";

Amplify.configure({ ...awsConfig, ssr: true });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
