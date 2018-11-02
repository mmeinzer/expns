import Meta from "./Meta";
import Header from "./Header";

const Page = props => (
  <div>
    <Meta />
    <Header />
    <div>{props.children}</div>
  </div>
);

export default Page;
