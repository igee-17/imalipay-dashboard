import React from "react";
import styled from "styled-components";

const InfoHeaderDefaulters = ({
  colOne,
  colTwo,
  colThree,
  colFour,
  colFive,
}) => {
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
  display: grid;
  grid-template-columns: 297px 171px 228px 96px 120px;
  background: #f3f3f3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (max-width: 1210px) {
    width: fit-content;
  }
  @media (max-width: 992px) {
    grid-template-columns: 227px 121px 185px 131px 120px;
  }
  @media (max-width: 585px) {
    height: 60px;
    grid-template-columns: 200px 100px 108px 91px 100px;
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
    /* border: 2px solid green; */
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 25px;
    background: #f3f3f3;
    @media (max-width: 992px) {
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
    @media (max-width: 992px) {
      padding-left: 22px;
    }
    @media (max-width: 585px) {
      padding-left: 20px;
    }
  }
`;

export default InfoHeaderDefaulters;
