import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { arrowLeft } from "../assets/icons";

const ModalMobile = ({ header, infoOne, infoTwo }) => {
  return (
    <Wrapper>
      <Link to="/reconcilation/connect-account" className="top">
        <img src={arrowLeft} alt="back arrow" />
        <p>Go Back</p>
      </Link>
      <div className="middle">
        <h2>{`${header || "Connect account"} `}</h2>
        <p>Connect your mobile account or bank statement to continue</p>
      </div>
      <div className="bottom">
        <div className="item-one item">
          <p>{`${infoOne || "Connect MPesa account"} `}</p>
        </div>
        <Link to="/reconcilation/upload" className="item-two item">
          <p>{`${infoTwo || "Upload Mpesa statement"} `}</p>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    /* width: 93px; */
    height: 32px;
    text-decoration: none;
    /* border: 2px solid red; */
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      letter-spacing: -0.03em;

      color: #222222;
    }
  }

  .middle {
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
    display: flex;
    align-items: center;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 431px;
      height: 70px;
      background: #eaecf0;
      border-radius: 10px;
      margin-bottom: 16px;
      transition: var(--transition-slow);
      text-decoration: none;
      p {
        text-align: center;
        width: auto;
        height: 22px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #101010;
      }
      :hover {
        transition: var(--transition-slow);
        cursor: pointer;
        box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
      }
    }
  }
`;

export default ModalMobile;