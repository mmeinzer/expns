import Link from 'next/link'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
`

const links = [
  { href: '/expenses', label: 'Expenses' },
  { href: '/add', label: 'Add Expense' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <StyledNav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </StyledNav>
)

export default Nav
