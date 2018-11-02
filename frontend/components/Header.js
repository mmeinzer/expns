import Link from "next/link";
import Nav from "./Nav";

const Header = () => (
  <header className="flex justify-between items-center pb-6">
    <h1 className="pt-5 pb-6">
      <Link href="/">
        <a className="no-underline text-purple">$Expns</a>
      </Link>
    </h1>
    <Nav />
  </header>
);

export default Header;
