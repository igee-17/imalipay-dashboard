import React from "react";
import styled from "styled-components";
import { moreVertical } from "../assets/icons";

const FloatingDefaulters = ({ text, number, info, image, icon }) => {
  return (
    <Wrapper className="card-item">
      <div className="col-one">
        <img src={image} alt={text} />
        <img src={moreVertical} alt="vertical-bar" />
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
  padding: 24px;
  gap: 24px;
  width: 307px;
  height: 192px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  box-shadow: 0px 1px 12px rgba(16, 24, 40, 0.1);

  border-radius: 8px;
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
    gap: 8px;
    width: 279px;
    height: 48px;
  }
  .col-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 279px;
    height: 72px;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
  }
  .col-two-span {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 24px;
    height: 44px;
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
    img {
      width: 12px;
      height: 12px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #027a48;
    }
  }
  .number {
    margin: 0;
  }
`;

export default FloatingDefaulters;
