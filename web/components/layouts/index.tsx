import { FC, ReactNode } from "react";
import { Navbar } from "../navigation/Navbar";

export const Layout: FC = ({ children }) => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>{children}</main>

    <footer>Copyright &copy; {new Date().getFullYear()}</footer>
  </div>
);

export const getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
