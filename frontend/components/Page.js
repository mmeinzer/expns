import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import Meta from './Meta'
import Header from './Header'
import theme from './theme'

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{ props.children }</Inner>
    </StyledPage>
  </ThemeProvider>
)

export default Page
