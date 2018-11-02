import Meta from "./Meta";
import Header from "./Header";

const Page = props => (
  <div className="h-full container mx-auto px-5">
    <Meta />
    <Header />
    <div className="flex justify-center">{props.children}</div>
  </div>
);

export default Page;
