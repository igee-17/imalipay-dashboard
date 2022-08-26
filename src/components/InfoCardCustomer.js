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
        {col1}
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
  border: 1px solid #eaecf0;
  display: grid;
  grid-template-columns: 171px 297px 218px 171px auto;
  width: 100%;
  height: 72px;
  background: #ffffff;
  input {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
  }
  .column {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 25px;

    h2 {
      margin: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;

      text-transform: uppercase;

      color: #707070;
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
      }
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #667085;
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
  }
`;

export default InfoCardCustomer;
