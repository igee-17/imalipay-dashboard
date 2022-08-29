import { navLinks } from "../utils/nav-links";
import NavLink from "./NavLink";
import styled from "styled-components";
import { closeSidebar } from "../features/dashboardSlice";
import { useDispatch } from "react-redux";

const NavLinks = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={() => {
        dispatch(closeSidebar());
      }}
    >
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
