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
  /* border: 2px solid green; */
  width: 100%;
  height: 72px;
  display: flex;
  /* gap: 10px; */
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
    /* border: 2px solid blue; */
    width: 210px;
    padding-left: 65px;

    h2 {
      margin: 0;
      /* margin-left: 16px; */
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
      /* border: 2px solid green; */
      width: 155px;
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
    img {
      height: 32px;
      width: 32px;
      border-radius: 200px;
    }
  }
  .column-one {
    /* width: auto; */
    gap: 12px;
    padding-left: 24px;
  }
  .column-five {
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
      p {
        text-transform: capitalize;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
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

export default InfoCard;
