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
  /* border: 2px solid red; */
  padding: 32px 25px;

  width: 480px;
  height: 388px;
  display: grid;
  /* flex-direction: column; */
  grid-template-rows: 50px 1fr;

  .top {
    /* border: 2px solid blue; */
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      color: #222222;
      margin: 0;
    }
    p {
      margin-top: 4px;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      color: #808080;
    }
  }
  .bottom {
    padding: 32px 0px;
    /* border: 2px solid green; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    .bottom-item {
      margin-bottom: 24px;
      /* border: 2px solid brown; */

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
      /* identical to box height */

      text-align: center;
      width: 150%;
      /* border: 2px solid red; */

      color: #000000;
    }
  }
`;

export default ModalAccountMain;
