import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalErp = () => {
  return (
    <Wrapper>
      <h2>Connect your ERP</h2>
      <aside className="select">
        <p className="text">ERP</p>
        <div className="erp">Select ERP</div>
      </aside>
      <Link to="/reconcilation/connect-erp/connect" className="a">
        <div className="link">
          <p> Connect</p>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px 25px;
  /* border: 2px solid red; */
  width: 480px;
  height: 296px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(34, 34, 34, 0.05);
  border-radius: 8px;
  font-weight: 500;
  h2 {
    font-size: 24px;
    line-height: 29px;
    color: #222222;
    margin-bottom: 32px;
  }
  .text {
    font-size: 14px;
    line-height: 17px;
    color: #808080;
    margin-bottom: 8px;
  }
  .erp {
    border: 1px solid #e5e5e5;
    /* border: 2px solid blue; */
    width: 430px;
    height: 52px;
    background: #ffffff;
    border-radius: 10px;
    /* display: flex; */
    /* align-items: center; */
    padding: 16px 16px;
    margin-bottom: 24px;
  }
  .a {
    text-decoration: none;
  }
  .link {
    border: 2px solid red;
    width: 432px;
    height: 70px;
    background: #80b539;
    border-radius: 10px;
    transition: var(--transition-slow);
    border: none;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      transition: var(--transition-slow);
      cursor: pointer;
      box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
    }
  }
`;

export default ModalErp;
