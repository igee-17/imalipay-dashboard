import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { BigSidebar, SmallSidebar, Navbar } from "../../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        <SmallSidebar />
        <div className="content">
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  /* border: 2px solid blue; */
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    position: relative;
    margin-left: 355px;
    /* margin-top: 141px; */
    width: 113px;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      /* width: 90%; */
    }
    .sidebar {
      /* box-shadow: 5px 10px #888888; */
      border-right: 1.5px solid #e5e5e5;

      /* border: 2px solid red; */
    }
  }
  .show-modal {
    position: fixed;
    display: flex;
    z-index: 999;
    opacity: 1;
    width: 100%;
    height: 100vh;
    /* border: 2px solid blue; */
    /* transition: all 4s ease-out 0s; */
    /* display: inline-block; */
    .modal-center {
      /* transition: all 4s ease-out 0s; */
      opacity: 1;
      width: 480px;
      height: auto;
    }
  }
`;

export default SharedLayout;
