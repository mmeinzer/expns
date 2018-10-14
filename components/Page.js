import Meta from './Meta'
import Header from './Header'
import Nav from './Nav'

const Page = props => (
  <>
    <Meta />
    <Header />
    <Nav />
    { props.children }
  </>
)

export default Page
