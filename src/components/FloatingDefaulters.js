import React from "react";
import styled from "styled-components";
import { moreVertical } from "../assets/icons";

const FloatingDefaulters = ({ text, number, info, image, icon }) => {
  return (
    <Wrapper className="card-item">
      <div className="col-one">
        <img src={image} alt={text} className="left-image" />
        <img src={moreVertical} alt="vertical-bar" className="right-image" />
      </div>
      <div className="col-two">
        <p className="text">{text}</p>
        <div className="col-two-span">
          <h1 className="number">{number}</h1>
          {icon && (
            <aside className="colored">
              <img src={icon} alt={text} />
              <p>{info}</p>
            </aside>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px;
  justify-content: center;
  gap: 24px;
  width: 307px;
  height: 192px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  box-shadow: 0px 1px 12px rgba(16, 24, 40, 0.1);
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: 1090px) {
    padding: 0px 1%;
  }
  @media (max-width: 992px) {
    padding: 0px 5%;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 156px;
    gap: 12px;
  }
  @media (max-width: 585px) {
    height: 180px;
    gap: 24px;
    padding: 0 12px;
    width: 90%;
  }
  :hover {
    box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
    transition: var(--transition-slow);
  }
  .col-one {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 24px;
    width: 100%;
    height: 48px;
    @media (max-width: 992px) {
      padding-right: 0px;
      width: 90%;
    }
    .left-image {
      @media (max-width: 992px) {
        width: 45px;
        height: 45px;
      }
      @media (max-width: 585px) {
        width: 50px;
        height: 50px;
      }
    }
  }
  .col-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 72px;
    @media (max-width: 992px) {
      width: 90%;
    }
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    @media (max-width: 1025px) {
      font-size: 11px;
      width: 100%;
    }
    @media (max-width: 734px) {
      font-size: 9px;
    }
    @media (max-width: 585px) {
      font-size: 14px;
    }
  }
  .col-two-span {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    height: 44px;
    width: 100%;
    @media (max-width: 992px) {
      padding-right: 0;
      width: 100%;
    }
  }
  .colored {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px 2px 10px;
    gap: 4px;
    width: 62px;
    height: 24px;
    background: #fef3f2;
    border-radius: 16px;
    @media (max-width: 992px) {
      width: 50px;
    }
    @media (max-width: 734px) {
      width: 45px;
    }
    @media (max-width: 585px) {
      width: 62px;
    }
    img {
      width: 12px;
      height: 12px;
      @media (max-width: 992px) {
        width: 11px;
        height: 11px;
      }
      @media (max-width: 734px) {
        width: 10px;
        height: 10px;
      }
      @media (max-width: 585px) {
        width: 12px;
      }
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #027a48;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 734px) {
        font-size: 10px;
      }
      @media (max-width: 585px) {
        font-size: 14px;
      }
    }
  }
  .number {
    margin: 0;
    @media (max-width: 992px) {
      font-size: 25px;
    }
    @media (max-width: 734px) {
      font-size: 20px;
    }
    @media (max-width: 585px) {
      font-size: 24px;
    }
  }
`;

export default FloatingDefaulters;
