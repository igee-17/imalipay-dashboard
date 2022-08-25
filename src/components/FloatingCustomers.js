import React from "react";
import styled from "styled-components";

const FloatingCustomers = ({ text, number, info, image }) => {
  return (
    <Wrapper className="card-item">
      <h3 className="text">{text}</h3>
      <div className="bottom">
        <h1>{number}</h1>
        <aside className="info">
          <div className="colored">
            <img src={image} alt="arrow up" />
            <span>{info}</span>
          </div>
          <p>vs last month</p>
        </aside>
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
  height: 176px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  box-shadow: 0px 1px 12px rgba(16, 24, 40, 0.1);
  border-radius: 8px;
  transition: var(--transition-slow);
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 279px;
    height: 80px;
  }
  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 279px;
    height: 20px;
  }
  .colored {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;

    width: 54px;
    height: 20px;
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #027a48;
    }
  }
  .text {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #101828;
    margin: 0;
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.02em;
    text-align: left;
    margin: 0;
  }
  img {
    width: 20px;
    height: 20px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
  }
`;

export default FloatingCustomers;
