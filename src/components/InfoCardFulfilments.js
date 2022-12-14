import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Animate from "./AnimationContainer";

const InfoCardFulfilments = (props) => {
  const { id, name, col1, col2, col3, col4, col5, border } = props;
  return (
    <Wrapper className={border === id ? "bordered" : null}>
      {name && (
        <>
          <div className="column-one column">
            <input type="checkbox" />
            <Animate>
              <Link
                to="/fulfilment/fulfilment-details"
                className="link-profile"
              >
                {col1}
              </Link>
            </Animate>
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
            <div className={col5 === "failed" ? "col5 danger" : "col5"}>
              <p>{col5}</p>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  /* border: 1px solid #eaecf0; */
  display: grid;
  grid-template-columns: 267px 195px 208px 157px 130px;
  width: 100%;
  height: 72px;
  background: #ffffff;
  @media (max-width: 1210px) {
    width: fit-content;
  }
  @media (max-width: 992px) {
    grid-template-columns: 227px 121px 185px 131px 120px;
  }
  @media (max-width: 585px) {
    height: 60px;
    grid-template-columns: 200px 100px 108px 120px 100px;
  }
  input {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    @media (max-width: 992px) {
      height: 18px;
      width: 18px;
    }
    @media (max-width: 585px) {
      height: 16px;
      width: 16px;
    }
  }
  .column {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaecf0;
    /* border: 1px solid #eaecf0; */
    /* border: 2px solid red; */
    @media (max-width: 992px) {
      /* background: #ffffff; */
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
      }
    }
    .link-profile {
      text-decoration: none;
    }
    .profile {
      display: flex;
      align-items: center;
      gap: 12px;
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
    @media (max-width: 992px) {
      padding-left: 22px;
    }
    @media (max-width: 585px) {
      padding-left: 20px;
    }
  }
  .column-four {
    p {
      text-transform: capitalize;
    }
  }
  .column-five {
    margin-bottom: 45px;
    /* border-bottom-left-radius: 10px; */
    /* border-bottom-right-radius: 10px; */
    .col5 {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 2px 8px;
      height: 22px;
      background: #ecfdf3;
      border-radius: 16px;
      p {
        text-transform: capitalize;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #027a48;
      }
    }
    .danger {
      background: #fef3f2;
      p {
        color: #b42318;
      }
    }
  }
`;

export default InfoCardFulfilments;
