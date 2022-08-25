import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dollarBig, walletBig } from "../assets/icons";

const ModalAccountMain = () => {
  return (
    <Wrapper>
      <div className="top">
        <h2>Connect account</h2>
        <p>Connect your mobile account or bank statement to continue</p>
      </div>
      <div className="bottom">
        <Link
          to="/reconcilation/connect-account/mobile"
          className="bottom-item item-one"
        >
          <img src={walletBig} alt="money-icon" />
          <p>Mobile money account</p>
        </Link>
        <Link
          to="/reconcilation/connect-account/bank"
          className="bottom-item item-two"
        >
          <img src={dollarBig} alt="bank icon" />
          <p>Bank account</p>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px 25px;
  width: 480px;
  height: 388px;
  display: grid;
  grid-template-rows: 50px 1fr;

  .top {
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #222222;
      margin: 0;
    }
    p {
      margin-top: 4px;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #808080;
    }
  }
  .bottom {
    padding: 32px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .bottom-item {
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 152px;
      height: 105px;
      text-decoration: none;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      width: 150%;
      color: #000000;
    }
  }
`;

export default ModalAccountMain;
