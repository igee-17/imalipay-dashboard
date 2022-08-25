import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navlink = ({ img, text, path }) => {
  return (
    <Wrapper>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive ? "link-item active" : "link-item";
        }}
      >
        <img src={img} alt={text} />
        <p>{text}</p>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 105px;
  height: 24px;
  margin-bottom: 32px;

  .link-item {
    opacity: 0.7;
    color: #000000;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: capitalize;
    transition: var(--transition-ease);
    img {
      margin-right: 15px;
      height: 24px;
      width: 24px;
    }
  }
  .link-item:hover {
    opacity: 1;
    transition: var(--transition-ease);
  }
  .active {
    opacity: 1;
  }
`;

export default Navlink;
