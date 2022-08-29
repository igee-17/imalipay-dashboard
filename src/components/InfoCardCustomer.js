import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Animate from "./AnimationContainer";

const InfoCardCustomer = (props) => {
  const { id, col1, col2, col3, col4, col5 } = props;
  console.log(col1);
  return (
    <Wrapper className={id === 5 ? "bordered" : null}>
      <div className="column-one column">
        <input type="checkbox" />
        <h2>{col1}</h2>
      </div>
      <div className="column-two column">
        <h2>{col2}</h2>
      </div>
      <div className="column-three column">
        <h2>{col3}</h2>
      </div>
      <div className="column-four column">
        <h2>{col4}</h2>
      </div>
      <div className="column-five column">
        <Animate>
          <Link to="/customers/customer-profile" className="link">
            <p>{col5}</p>
          </Link>
        </Animate>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 171px 297px 218px 171px 110px;
  width: 100%;
  height: 72px;
  background: #ffffff;
  @media (max-width: 1210px) {
    width: fit-content;
  }
  @media (max-width: 992px) {
    grid-template-columns: 121px 227px 198px 131px 120px;
  }
  @media (max-width: 585px) {
    height: 60px;
    grid-template-columns: 111px 187px 128px 120px 100px;
  }
  input {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    @media (max-width: 992px) {
      width: 18px;
      height: 18px;
    }
    @media (max-width: 585px) {
      width: 16px;
      height: 16px;
    }
  }
  .column {
    border-bottom: 1px solid #eaecf0;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 25px;
    @media (max-width: 992px) {
      background: #ffffff;
      padding-left: 20px;
    }
    @media (max-width: 585px) {
      padding-left: 0px;
      /* align-items: flex-start; */
      justify-content: flex-start;
    }

    h2 {
      margin: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      color: #707070;
      @media (max-width: 992px) {
        font-size: 11px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
        padding-left: 0px;
      }
    }
    .profile {
      display: flex;
      align-items: center;
      gap: 12px;
      @media (max-width: 585px) {
        gap: 5px;
      }
      h3 {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #101828;
        @media (max-width: 992px) {
          font-size: 13px;
        }
        @media (max-width: 585px) {
          font-size: 11px;
        }
      }
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #667085;
        @media (max-width: 992px) {
          font-size: 13px;
        }
        @media (max-width: 585px) {
          font-size: 11px;
        }
      }
    }
  }
  .column-one {
    gap: 12px;
    padding-left: 24px;
  }
  .link {
    text-decoration: none;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #667085;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
  }
  .column-four {
    p {
      text-transform: capitalize;
    }
  }
  .column-five {
    padding-left: 0px;
    align-items: center;
    @media (max-width: 992px) {
      justify-content: center;
    }
  }
`;

export default InfoCardCustomer;
