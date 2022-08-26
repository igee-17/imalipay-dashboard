import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { arrowLeft } from "../assets/icons";
import { toast } from "react-toastify";
import { closeModal } from "../features/dashboardSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const ModalMobile = ({ header, infoOne, infoTwo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const connect = () => {
    toast.success("Connection Success 🔐");
    setTimeout(() => {
      dispatch(closeModal());
      navigate("/reconcilation");
    }, 2000);
  };
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
        <button onClick={connect} type="button" className="item-one item">
          <p>{`${infoOne || "Connect MPesa account"} `}</p>
        </button>
        <Link to="/reconcilation/upload" className="item-two item">
          <p>{`${infoTwo || "Upload Mpesa statement"} `}</p>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    height: 32px;
    text-decoration: none;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.03em;
      color: #222222;
    }
  }

  .middle {
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
    .item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      border: none;
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
