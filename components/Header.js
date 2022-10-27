import styled from "styled-components";
/*import { SiFoodpanda } from "react-icons/tb";*/

export default function Header() {
  return (
    <StyledHeader>
      {/*<SiFoodpanda />*/}
      <StyledNavigation>
        <Anchor>Home</Anchor>
        <Anchor>Veggie</Anchor>
        <Anchor>Desserts</Anchor>
      </StyledNavigation>
    </StyledHeader>
  );
}
/*
const PandaIcon = styled(SiFoodpanda)`
  @media (max-width: 600px) {
    display: none;
  }
`;
*/
const Anchor = styled.a`
  color: hotpink;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid darkgray;
  background-color: lightskyblue;
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;
