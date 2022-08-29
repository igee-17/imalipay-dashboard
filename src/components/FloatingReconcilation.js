import React from "react";
import styled from "styled-components";
import { arrowDownIos } from "../assets/icons";

const FloatingReconcilation = ({ id, text, image, number, circle }) => {
  return (
    <Wrapper>
      <div className={id === 3 ? "left last" : "left"}>
        <header>
          {image && (
            <>
              <img src={image} alt={text} />
              <select
                name="kes"
                id="kes"
                value="kes"
                style={{ backgroundImage: `url(${arrowDownIos})` }}
                onChange={() => console.log("kes")}
              >
                <option value="kes">kes</option>
              </select>
            </>
          )}
        </header>
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
      {circle && (
        <div className={id === 3 ? "right last-right" : "right"}>
          {!circle ? (
            "hello"
          ) : (
            <div className="circle">
              <div className="content">
                <p>{number}%</p>
              </div>
            </div>
          )}
        </div>
      )}
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
  @media (max-width: 1090px) {
    padding: 20px;
  }
  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: auto;
    height: 156px;
  }
  @media (max-width: 784px) {
    /* width: 75%; */
    width: 90%;
    height: 190px;
  }

  :hover {
    box-shadow: var(--box-shadow-light);
    transition: var(--transition-slow);
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 992px) {
    }
    @media (max-width: 585px) {
    }
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
      background-repeat: no-repeat;
      background-position-x: 100%;
      background-position-y: 5px;
      @media (max-width: 1270px) {
        background-size: 10px;
        padding: 4px;
        font-size: 10px;
        width: 47px;
        height: 22px;
      }

      @media (max-width: 992px) {
        font-size: 9px;
        background-size: 14px;
        padding: 4px;
        font-size: 13px;
        width: 52px;
        height: 26px;
      }
      @media (max-width: 585px) {
        background-size: 12px;
        padding: 4px;
        font-size: 13px;
        width: 52px;
        height: 26px;
      }
    }
  }
  .right {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .last {
    display: flex;
    align-items: flex-end;

    .details {
      width: inherit;
    }
  }
  .last-right {
    width: 132px;
    @media (max-width: 1190px) {
      width: 65%;
    }
  }
  img {
    height: 48px;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    @media (max-width: 1270px) {
      font-size: 10px;
    }
    @media (max-width: 992px) {
      font-size: 12px;
    }
  }
  .number {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    letter-spacing: -0.02em;
    color: #101828;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    @media (max-width: 1220px) {
      font-size: 25px;
    }
    @media (max-width: 992px) {
      font-size: 30px;
    }
    span {
      font-weight: 500;
      font-size: 24px;
      margin: 0;
      padding: 0;
      letter-spacing: -0.02em;
      color: #b5b5b5;
      @media (max-width: 1220px) {
        font-size: 20px;
      }
    }
  }
  .circle {
    width: 132px;
    height: 132px;
    background: #fff0d1;
    border: 7px solid rgba(0, 0, 0, 0.05);
    border-top: 7px solid #feaa00;
    border-left: 7px solid #feaa00;
    border-radius: 50%;
    transform: rotate(-60deg);

    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1220px) {
      height: 120px;
      width: 120px;
    }
    @media (max-width: 992px) {
      height: 110px;
      width: 110px;
    }
    .content {
      transform: rotate(60deg);
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
