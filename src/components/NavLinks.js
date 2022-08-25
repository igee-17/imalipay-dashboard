import { navLinks } from "../utils/nav-links";
import NavLink from "./NavLink";
import styled from "styled-components";

const NavLinks = () => {
  return (
    <Wrapper>
      {navLinks.map((link) => {
        // const { id, img, text, path } = link;
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
  /* margin-top: 66px; */

  /* flex-direction: column */
`;

export default NavLinks;
