import React from "react";
import styled from "styled-components";

const InfoHeader = ({ colOne, colTwo, colThree, colFour, colFive }) => {
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
        <h2>{colFive}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  background: #f3f3f3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (max-width: 1210px) {
    width: fit-content;
  }
  @media (max-width: 585px) {
    height: 60px;
  }
  input {
    height: 18px;
    width: 18px;
    background: #d0d0d0;
    margin-right: 16px;
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
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    width: 210px;
    padding-left: 65px;
    @media (max-width: 992px) {
      padding-left: 55px;
      width: 170px;
    }
    @media (max-width: 585px) {
      /* border: 2px solid green; */
      padding-left: 40px;
      width: 139px;
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
        font-size: 10px;
      }
      @media (max-width: 585px) {
        font-size: 9px;
      }
    }
  }
  .column-one {
    padding-left: 24px;
    @media (max-width: 992px) {
      width: 190px;
    }

    h2 {
      /* width: 160px; */
    }
  }
  .column-five {
    /* border: 2px solid red; */
    justify-content: flex-start;
    @media (max-width: 585px) {
      padding-left: 40px;
    }
  }
`;

export default InfoHeader;
