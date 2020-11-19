import { FC } from "react";
import { Link } from "./Link";

export const Navbar: FC = () => {
  return (
    <nav className="flex justify-between">
      <div>Logo or something</div>

      <ul className="list-none flex gap-4">
        <li>
          <Link href="/" as="/">
            Index
          </Link>
        </li>
        <li>
          <Link href="/sign-in" as="/sign-in">
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
};
