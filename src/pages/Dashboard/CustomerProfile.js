import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  InputNames,
  InputWide,
  AmountTop,
  OverdueCard,
} from "../../components";
import { profileRound } from "../../assets/images";

const statusCard = {
  number: "1/4",
  text: "overdue",
  color: "#FEF3F2",
  fontColor: "#B42318",
};

const CustomerProfile = () => {
  return (
    <Wrapper>
      <article className="header">
        <Link to="/customers" className="link">
          Go back
        </Link>{" "}
        <span>/ Oliver Tai</span>
      </article>

      <div className="customers-info">
        <div className="left item">
          <p className="title">Customer Profile</p>
          <aside className="profile">
            <img src={profileRound} alt="person-one" />
            <div className="info">
              <h3>Oliver Tai</h3>
              <p>Customer</p>
            </div>
          </aside>
          <form onSubmit={console.log("success")}>
            <InputNames
              labelOne="First name"
              labelTwo="Last name"
              valueOne="James"
              valueTwo="Warri"
            />
            <InputWide
              label="Phone number"
              value="8041 5063 789"
              image={true}
              id="number"
            />
            <InputNames
              labelOne="Date of birth"
              labelTwo="State of residence"
              valueOne="02 Feb 1990"
              valueTwo="Lagos"
            />
            <InputNames
              labelOne="Bank name"
              labelTwo="Bank number"
              valueOne="Access Bank PLC"
              valueTwo="102848393"
            />
            <InputWide
              label="Address"
              value="34 Sunville Estate, Macathony Street,  Ikeja"
              image={false}
              id="address"
            />
          </form>
        </div>
        <div className="right item">
          <div className="right-center">
            <h2>Transaction history</h2>
            <AmountTop
              titleOne="Amount loaned (NGN)"
              titleTwo="Amount paid(NGN)"
              valueOne="404,051"
              valueTwo="120,000"
            />
            <article className="bottom">
              <p className="text-header">Pending payment</p>
              <OverdueCard {...statusCard} />
              <OverdueCard {...statusCard} />
              <OverdueCard {...statusCard} />
              <OverdueCard {...statusCard} />
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-width: 403px;
  width: calc(100vw - 403px);
  margin-top: 141px;
  @media (max-width: 992px) {
    width: 80vw;
    margin: 130px 0px;
  }
  @media (max-width: 585px) {
    padding: 0 8px;
    /* height: 310px; */
  }

  .header {
    margin-bottom: 32px;

    .link {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #101010;
      text-decoration: none;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #707070;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #222222;
    @media (max-width: 992px) {
      font-size: 22px;
    }
    @media (max-width: 585px) {
      font-size: 20px;
    }
  }
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 129px;
    height: 56px;
    margin: 24px 0 37px;
    img {
      @media (max-width: 992px) {
        height: 40px;
        width: 40px;
      }
      @media (max-width: 585px) {
        height: 35px;
        width: 35px;
      }
    }

    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #344054;
      margin: 0;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #667085;
      @media (max-width: 992px) {
        font-size: 10px;
      }
      @media (max-width: 585px) {
        font-size: 8px;
      }
    }
  }
  .customers-info {
    width: 100%;
    height: 732px;
    left: 355px;
    top: 196px;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    padding: 48px 0 48px;
    margin-bottom: 96px;
    @media (max-width: 992px) {
      padding: 28px 0 28px;
      height: 100%;
    }
    @media (max-width: 585px) {
      padding: 18px 0 18px;
      /* font-size: 8px; */
    }
    .item {
      padding: 0px 48px;
      height: 100%;
      width: 50%;
      @media (max-width: 992px) {
        padding: 0 30px;
      }
      @media (max-width: 585px) {
        padding: 0px 3px;
      }
    }
    .left {
      @media (max-width: 585px) {
        width: 48%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      padding-top: 53px;
      border-left: 1px solid #e5e5e5;
      @media (max-width: 992px) {
        padding: 33px 10px;
      }
      @media (max-width: 585px) {
        width: 52%;
        padding: 53px 5px;
      }
      h2 {
        margin: 0;
        font-weight: 500;
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
  }
  .text-header {
    margin-bottom: 16px;
    @media (max-width: 992px) {
      /* font-size: 12px; */
    }
    @media (max-width: 585px) {
      /* font-size: 10px; */
    }
  }

  .address {
    .center {
      display: flex;
      width: 100%;
    }
    input {
      margin-left: 0;
      padding-left: 21.53px;
      width: 100%;
      height: 100%;
      /* border: 2px solid brown; */
      @media (max-width: 992px) {
        font-size: 11px;
        padding-left: 15px;
      }
      @media (max-width: 585px) {
        padding-left: 10px;
        font-size: 10px;
      }
    }
  }
`;

export default CustomerProfile;
