import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  margin: 0;
  padding: 1rem;
  min-height: calc(100vh - 8rem);
`;
