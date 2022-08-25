import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  return (
    <Wrapper className="sidebar">
      <div className="sidebar-container">
        <div className="content">
          <header>
            <Logo className="logo" />
          </header>
          <div className="title">QUICK MENU</div>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background: #ffffff;
  position: fixed;
  color: #1c1b1f;
  width: 307px;
  height: 1026px;
  display: none;

  @media (min-width: 992px) {
    padding-top: 38px;
    padding-left: 42px;
    display: block;
    .sidebar-container {
      background: var(--white);
      height: 100%;
    }
    .logo {
      height: 43px;
      width: 161px;
      object-fit: cover;
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
    }
  }
`;

export default BigSidebar;
