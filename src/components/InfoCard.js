import React from "react";
import styled from "styled-components";
import InfoProfile from "./InfoProfile";

const InfoCard = (props) => {
  const { id, image, name, phone, col1, col2, col3, col4, col5 } = props;
  console.log(col1);
  return (
    <Wrapper className={id === 5 ? "bordered" : null}>
      <div className="column-one column">
        <input type="checkbox" />
        {col1 || <InfoProfile image={image} phone={phone} name={name} />}
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
        <div
          className={col5 === "failed" ? "text-center danger" : "text-center"}
        >
          <p>{col5}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  border: 1px solid #eaecf0;
  width: 100%;
  height: 72px;
  display: flex;
  background: #ffffff;
  @media (max-width: 1210px) {
    width: fit-content;
  }
  @media (max-width: 585px) {
    height: 60px;
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
    .profile {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 155px;
      h3 {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #101828;
        @media (max-width: 992px) {
          font-size: 12px;
        }
      }
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #667085;
        @media (max-width: 992px) {
          font-size: 12px;
        }
      }
    }
    img {
      height: 32px;
      width: 32px;
      border-radius: 200px;
    }
  }
  .column-one {
    gap: 12px;
    padding-left: 24px;
    @media (max-width: 992px) {
      width: 190px;
    }
  }
  .column-five {
    /* border: 2px solid red; */
    justify-content: flex-start;
    @media (max-width: 585px) {
      padding-left: 40px;
    }
    .text-center {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 2px 8px;

      width: 79px;
      height: 22px;
      background: #ecfdf3;
      border-radius: 16px;
      @media (max-width: 992px) {
        /* border: 2px solid blue; */
        width: 70px;
        height: 13px;
      }

      p {
        text-transform: capitalize;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #027a48;
        @media (max-width: 992px) {
          font-size: 10px;
        }
        @media (max-width: 585px) {
          /* width: 159px;
      height: 45px; */
        }
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

export default InfoCard;
