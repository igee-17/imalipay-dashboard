import React from "react";
import styled from "styled-components";

const InfoHeaderCustomer = ({ colOne, colTwo, colThree, colFour, colFive }) => {
  return (
    <Wrapper>
      <div className="column-one column">
        <input type="checkbox" disabled />
        <h2>{colOne}</h2>
      </div>
      <div className="column-two column">
        <h2>{colTwo}</h2>
      </div>
      <div className="column-three column">
        <h2>{colThree}</h2>
      </div>
      <div className="column-four column">
        <h2>{colFour}</h2>
      </div>
      <div className="column-five column">
        <h2 className={!colFive && "view"}>{colFive}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 52px;
  display: grid;
  grid-template-columns: 171px 297px 218px 171px 110px;
  background: #f3f3f3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (max-width: 1210px) {
    width: fit-content;
  }
  @media (max-width: 992px) {
    grid-template-columns: 121px 227px 198px 131px 120px;
  }
  @media (max-width: 585px) {
    grid-template-columns: 111px 187px 128px 91px 100px;
    height: 46px;
  }
  input {
    height: 18px;
    width: 18px;
    background: #d0d0d0;
    margin-right: 16px;
    @media (max-width: 992px) {
      height: 16px;
      width: 16px;
    }
    @media (max-width: 585px) {
      height: 14px;
      width: 14px;
    }
  }

  .column {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 25px;
    @media (max-width: 1330px) {
      background: #f3f3f3;
    }
    @media (max-width: 992px) {
      background: #f3f3f3;
      padding-left: 20px;
    }
    @media (max-width: 585px) {
      padding-left: 10px;
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
  }
  .column-one {
    padding-left: 24px;
    border-top-left-radius: 10px;
  }
  .column-five {
    padding-left: 0px;
    align-items: center;
    /* padding-right: 24px; */
    border-top-right-radius: 10px;
    h2 {
      opacity: 1;
    }
    @media (max-width: 992px) {
      /* border: 2px solid blue; */
      justify-content: center;
    }
  }
`;

export default InfoHeaderCustomer;
