import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { BigSidebar, SmallSidebar, Navbar } from "../../components";
import { toast } from "react-toastify";

const SharedLayout = () => {
  toast.success("Welcome 🧵");

  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        <SmallSidebar />
        <div className="main-content">
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
  @media (max-width: 992px) {
    position: relative;
    width: 100%;
  }
  .dashboard {
    display: grid;
    grid-template-columns: auto 1fr;
    @media (max-width: 992px) {
      position: relative;
      /* width: 100vw; */
      grid-template-columns: 1fr;
    }
    .main-content {
      @media (max-width: 992px) {
        position: relative;
        overflow-x: hidden;
        /* border: 2px solid purple; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* padding: 0 20px; */
        align-items: center;
        /* width: 100%; */
      }
    }
    .dashboard-page {
      /* position: relative; */
      margin-left: 355px;
      width: 113px;
      @media (max-width: 992px) {
        width: 90%;
        width: auto;
        margin-left: 0px;
      }
    }
  }
  .sidebar {
    border-right: 1.5px solid #e5e5e5;
  }
  .show-modal {
    position: fixed;
    display: flex;
    z-index: 999;
    opacity: 1;
    width: 100%;
    height: 100vh;
    .modal-center {
      position: relative;
      opacity: 1;
      width: 480px;
      height: auto;
      @media (max-width: 992px) {
        width: 80%;
        /* padding: 0; */
        /* width: 80vw; */
        height: 50%;
        /* border: 2px solid green; */
        /* justify-content: center; */
        /* align-items: center; */
      }
      @media (max-width: 585px) {
      }
    }
  }
  /* 'active' class below is for smallSidebar */
  .active {
    transition: var(--transition-slow);
    transform: translateX(0);
    opacity: 1;
  }
`;

export default SharedLayout;
