import { navLinks } from "../utils/nav-links";
import NavLink from "./NavLink";
import styled from "styled-components";

const NavLinks = () => {
  return (
    <Wrapper>
      {navLinks.map((link) => {
        return <NavLink key={link.id} {...link} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.3rem;
  margin-top: 38px;
`;

export default NavLinks;
