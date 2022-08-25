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
        <h2>{colFive}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 52px;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: 171px 297px 218px 171px auto;

  /* justify-content: space-between; */
  background: #f3f3f3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  input {
    height: 18px;
    width: 18px;
    background: #d0d0d0;
    margin-right: 16px;
  }

  .column {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    /* width: 210px; */
    /* border: 2px solid red; */
    padding-left: 25px;

    h2 {
      /* border: 2px solid red; */
      margin: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      color: #707070;
    }
  }
  .column-one {
    /* width: auto; */
    padding-left: 24px;
    h2 {
      /* width: 160px; */
    }
  }
`;

export default InfoHeaderCustomer;