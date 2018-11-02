import Link from "next/link";
import Nav from "./Nav";

const Header = () => (
  <header>
    <h1>
      <Link href="/">
        <a>$Expns</a>
      </Link>
    </h1>
    <Nav />
  </header>
);

export default Header;
