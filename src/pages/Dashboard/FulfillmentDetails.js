import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Status } from "../../components";

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

const FulfillmentDetails = () => {
  return (
    <Wrapper>
      <article className="header">
        <Link to="/fulfilment" className="link">
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
              labelOne="First Name"
              labelTwo="Last name"
              valueOne="Oliver"
              valueTwo="Tai"
            />
            <InputNames
              labelOne="Gender"
              labelTwo="Date of brth"
              valueOne="Male"
              valueTwo="21 Jul 1990"
            />
            <InputNames
              labelOne="BVN"
              labelTwo="Phone Number"
              valueOne="230459694042"
              valueTwo="+234 705 509 4953"
            />
            <InputWide
              label="Home address"
              value="18 Street name, Town, LGA, State, Country"
              image={false}
              id="homeAddress"
            />
            {/* LINE BREAK HERE */}
            <div className="line-breaker"></div>
            <InputWide
              label="Location of Purchase"
              value="Mega Autoshop, Lagos"
              image={false}
              id="location"
            />
            <InputWide
              label="Vehicle Model"
              value="Toyota - Model Z"
              image={false}
              id="vehicle"
            />
            <InputWide
              label="Insurance Provider"
              value="Company Insurance Plc"
              image={false}
              id="insurance"
            />
          </form>
        </div>
        <div className="right item">
          <div className="right-center">
            <h2>Transaction history</h2>
            <AmountTop
              titleOne="Repayment amount"
              titleTwo="Value of car"
              valueOne="₦304,600"
              valueTwo="₦6,300,950"
              month={true}
            />
            <AmountTop
              titleOne="Repayment duration"
              titleTwo="Repayment ends"
              valueOne="6 Months"
              valueTwo="03 Dec 2022"
            />
            <AmountTop
              titleOne="Transaction date"
              titleTwo="Status"
              valueOne="Jan 6, 2022 @ 08:45"
              valueTwo={
                <Status text="Active" color="#ECFDF3" fontColor="#027A48" />
              }
            />
            <article className="bottom bottom-one">
              <p className="text-header">Upcoming payment</p>
              <OverdueCard
                number="3/6"
                text="Overdue"
                color="#FEF3F2"
                fontColor="#B42318"
              />
              <OverdueCard
                number="4/6"
                text="Pending"
                color="#FFFAEB"
                fontColor="#D68F00"
              />
            </article>
            <article className="bottom bottom-two">
              <p className="text-header">Completed payment</p>
              <OverdueCard
                number="1/6"
                text="Paid"
                color="#EFF8FF"
                fontColor="#175CD3"
              />
              <OverdueCard
                number="2/6"
                text="Paid"
                color="#EFF8FF"
                fontColor="#175CD3"
              />
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// const statusCard = {
//   number: "1/4",
//   text: "overdue",
//   color: "#FEF3F2",
//   fontColor: "#B42318",
// };

const Wrapper = styled.section`
  /* border: 2px solid blue; */
  min-width: 403px;
  width: calc(100vw - 403px);
  margin-top: 141px;

  .header {
    margin-bottom: 32px;
    /* } */

    .link {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #101010;
      text-decoration: none;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #707070;
    }
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #222222;
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

    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #344054;
      margin: 0;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #667085;
    }
  }
  .customers-info {
    width: 100%;
    height: 916px;
    left: 355px;
    top: 196px;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    padding: 48px 0 48px;
    margin-bottom: 96px;
    .item {
      padding: 0px 48px;
      /* border: 2px solid red; */
      height: 100%;
      width: 50%;
    }
    .right {
      display: flex;
      flex-direction: column;
      padding-top: 53px;
      border-left: 1px solid #e5e5e5;
      h2 {
        margin: 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        color: #808080;
      }
    }
  }
  .amount-top {
    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #101010;
    }
  }
  .text-header {
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #808080;
  }

  .center {
    display: flex;
    width: 100%;
  }
  input {
    margin-left: 0;
    padding-left: 21.53px;
    width: 100%;
    height: 100%;
  }
  .line-breaker {
    width: 418px;
    height: 0px;
    border: 1px solid #eaecf0;
    margin: 24px 0 24px;
  }
  .bottom-two {
    margin-top: 38px;
  }
`;

export default FulfillmentDetails;
