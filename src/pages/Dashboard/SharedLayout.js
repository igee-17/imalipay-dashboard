import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { BigSidebar, Navbar } from "../../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
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
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    position: relative;
    margin-left: 355px;
    width: 113px;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
    }
    .sidebar {
      border-right: 1.5px solid #e5e5e5;
    }
  }
  .show-modal {
    position: fixed;
    display: flex;
    z-index: 999;
    opacity: 1;
    width: 100%;
    height: 100vh;
    .modal-center {
      opacity: 1;
      width: 480px;
      height: auto;
    }
  }
`;

export default SharedLayout;
