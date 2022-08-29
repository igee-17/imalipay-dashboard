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

const Wrapper = styled.section`
  padding: 32px 25px;
  width: 480px;
  height: 388px;
  display: grid;
  grid-template-rows: 50px 1fr;
  @media (max-width: 992px) {
    /* min-width: 100%; */
    width: 100%;
    /* min-height: 100%; */
    height: 100%;
    padding: 20px;
  }
  @media (max-width: 585px) {
    /* padding: 0px; */
  }

  .top {
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #222222;
      margin: 0;
      @media (max-width: 992px) {
        font-size: 22px;
      }
      @media (max-width: 585px) {
        font-size: 20px;
      }
    }
    p {
      margin-top: 4px;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #808080;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
  }
  .bottom {
    padding: 32px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 992px) {
      padding: 20px 0;
    }
    .bottom-item {
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 152px;
      height: 105px;
      text-decoration: none;
      @media (max-width: 992px) {
        width: 100%;
        padding: 0;
        height: 35%;
        /* height: 50%; */
      }
    }
    img {
      @media (max-width: 992px) {
        width: 70px;
        height: 70px;
      }
      @media (max-width: 585px) {
        width: 65px;
        height: 65px;
      }
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      width: 150%;
      color: #000000;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
  }
`;

export default ModalAccountMain;
