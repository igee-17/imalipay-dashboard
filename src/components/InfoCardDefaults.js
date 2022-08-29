import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoCardDefaults = (props) => {
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
        <Link to="/customers/customer-profile" className="link">
          <p>{col5}</p>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  /* border: 1px solid #eaecf0; */
  display: grid;
  grid-template-columns: 297px 171px 228px 96px 120px;
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
    grid-template-columns: 200px 100px 108px 91px 100px;
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
    padding-left: 25px;
    border-bottom: 1px solid #eaecf0;
    @media (max-width: 992px) {
      background: #ffffff;
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
  .link {
    text-decoration: none;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
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
  .column-four {
    img {
      @media (max-width: 992px) {
        width: 100px;
        height: 10px;
      }
      @media (max-width: 585px) {
        font-size: 11px;
      }
    }
    p {
      text-transform: capitalize;
    }
  }
  .column-five {
    padding-left: 0px;
    align-items: center;
    justify-content: center;
  }
`;

export default InfoCardDefaults;
