import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { arrowDown } from "../assets/icons";

const SmallSidebar = () => {
  return (
    <Wrapper className="sidebar">
      <div className="sidebar-container">
        <div className="content">
          <header>
            <Logo className="logo" />
            <img src={arrowDown} alt="toggle-arrow" className="toggle-arrow" />
          </header>
          <div className="title">QUICK MENU</div>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  color: #1c1b1f;
  width: 307px;
  height: 1026px;
  padding-top: 38px;
  padding-left: 42px;
  display: block;
  .sidebar-container {
    background: var(--white);
    height: 100%;
  }
  header {
    border: 2px solid red;
    display: flex;
  }
  .logo {
    /* margin-bottom: 30px; */
    height: 43px;
    width: 161px;
    object-fit: cover;
    margin-right: 30px;
  }
  .toggle-arrow {
    transform: rotate(90deg);
  }
  .content {
    position: sticky;
    top: 0;
  }
  .show-sidebar {
    margin-left: 0;
  }
  header {
    display: flex;
    align-items: center;
  }
  .title {
    color: #808080;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 51px;
    line-height: 15px;
    /* margin-bottom: 53px; */
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default SmallSidebar;
