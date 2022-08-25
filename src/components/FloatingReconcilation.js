import React from "react";
import styled from "styled-components";
import { arrowDownIos } from "../assets/icons";

const FloatingReconcilation = ({ id, text, image, number, circle }) => {
  return (
    <Wrapper>
      <div className={id === 3 ? "left last" : "left"}>
        {image && <img src={image} alt={text} />}
        <article className="details">
          <p className="text">{text}</p>

          {!image ? (
            <p className="number">
              {number}
              <span>/100%</span>
            </p>
          ) : (
            <p className="number">{number}</p>
          )}
        </article>
      </div>
      <div className={id === 3 ? "right last-right" : "right"}>
        {!circle ? (
          <select
            name="kes"
            id="kes"
            value="kes"
            style={{ backgroundImage: `url(${arrowDownIos})` }}
            onChange={() => console.log("kes")}
          >
            <option value="kes">kes</option>
          </select>
        ) : (
          <div className="circle">
            <div className="content">
              <p>{number}%</p>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 24px;
  width: 307px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  box-shadow: 0px 1px 12px rgba(16, 24, 40, 0.1);
  height: 180px;
  border-radius: 16px;
  transition: var(--transition-slow);

  display: flex;

  :hover {
    box-shadow: var(--box-shadow-light);
    transition: var(--transition-slow);
  }
  .left {
    width: 70%;
    /* border: 2px solid red; */
    height: 100%;
  }
  .right {
    width: 30%;
    height: 132px;
    /* border: 2px solid blue; */
    /* height: 100%; */
    display: flex;
    justify-content: flex-end;
    select {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 57px;
      height: 28px;
      background: #f2f2f2;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      cursor: pointer;
      text-transform: uppercase;
      padding-left: 3px;

      -webkit-appearance: none;
      -moz-appearance: none;
      /* background: transparent; */
      background-repeat: no-repeat;
      background-position-x: 100%;
      background-position-y: 5px;
    }
  }
  .last {
    display: flex;
    align-items: flex-end;
    /* border: 2px solid green; */

    .details {
      width: inherit;
      padding-top: 25px;
    }
  }
  .last-right {
    width: 132px;
    /* border: 2px solid green; */
  }
  img {
    width: 48px;
    height: 48px;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    width: 279px;
    height: 72px;
    margin-top: 16px;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    /* Gray/500 */

    color: #667085;
  }
  .number {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #101828;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      font-size: 24px;
      line-height: 44px;
      margin: 0;
      padding: 0;
      letter-spacing: -0.02em;

      color: #b5b5b5;
    }
  }
  .circle {
    width: 132px;
    height: 132px;
    background: #fff0d1;
    border: 7px solid rgba(0, 0, 0, 0.05);
    /* border-bottom: 7px solid #feaa00; */
    border-top: 7px solid #feaa00;
    border-left: 7px solid #feaa00;
    border-radius: 50%;
    transform: rotate(-60deg);

    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      transform: rotate(60deg);
      /* border: 2px solid red; */
      width: 67px;
      height: 44px;
      p {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #101828;
      }
    }
  }
`;

export default FloatingReconcilation;
