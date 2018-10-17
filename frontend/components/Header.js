import styled from 'styled-components'
import Link from 'next/link'
import Nav from './Nav'

const StyledHeader = styled.header`
  border-bottom: 2px solid ${props => props.theme.lightBlue};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Logo = styled.h1`
  font-size: 4rem;
  position: relative;
  transform: skew(-7deg);
  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.blue};
    color: ${props => props.theme.offWhite};
  }
`

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>$Expns</a>
      </Link>
    </Logo>
    <Nav />
  </StyledHeader>
)

export default Header
