import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { arrowDown, notification } from "../assets/icons";
import { closeSidebar } from "../features/dashboardSlice";
import { useSelector, useDispatch } from "react-redux";

const SmallSidebar = () => {
  const dispatch = useDispatch();
  const { isSidebar } = useSelector((store) => store.dashboard);
  return (
    <Wrapper className={isSidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar-container">
        <div className="content">
          <header>
            <Logo className="logo" />
            <button
              type="button"
              className="button"
              onClick={() => dispatch(closeSidebar())}
            >
              <img
                src={arrowDown}
                alt="toggle-arrow"
                className="toggle-arrow"
              />
            </button>
          </header>
          <div className="title">
            <p>QUICK MENU</p>
            <img
              src={notification}
              alt="notification-icon"
              className="notification"
            />
          </div>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  /* STYLES FOR CLASSNAME-'active' IN PARENT ELEMENT */
  /* border: 2px solid red; */
  /* background: rgba(255, 255, 255, 0.7); */
  border-left: 1.5px solid #e5e5e5;

  background: white;
  position: fixed;
  top: 0;
  right: 0;
  color: #1c1b1f;
  width: 307px;
  height: 100vh;
  overflow-y: hidden;
  padding-top: 38px;
  padding-left: 42px;
  display: block;
  transition: var(--transition-slow);
  transform: translateX(100%);
  opacity: 0;
  z-index: 999999;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
    transform: rotate(180deg);
  }
  .sidebar-container {
    background: var(--white);
    height: 100%;
  }
  header {
    /* border: 2px solid red; */
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    height: 43px;
    width: 161px;
    object-fit: cover;
    /* margin-right: 30px; */
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

    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
  }
  .notification {
    cursor: pointer;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default SmallSidebar;
