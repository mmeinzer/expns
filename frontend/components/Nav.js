import Link from "next/link";

const links = [
  { href: "/expenses", label: "List" },
  { href: "/add", label: "Add" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul className="flex">
      {links.map(({ key, href, label }) => (
        <li className="list-reset pl-4" key={key}>
          <Link href={href}>
            <a className="no-underline hover:bg-purple-dark text-black text-lg bg-purple py-1 px-3 text-white rounded">
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
