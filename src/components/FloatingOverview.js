import React from "react";
import styled from "styled-components";

const FloatingOverview = ({ text, image, info }) => {
  return (
    <Wrapper>
      <img src={image} alt={text} />
      <div>
        <p>{text}</p>
        <h1>{info}</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 24px;
  gap: 24px;
  padding: 24px;
  width: 307px;
  height: 192px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  box-shadow: 0px 1px 12px rgba(16, 24, 40, 0.1);
  border-radius: 8px;
  transition: var(--transition-slow);
  @media (max-width: 992px) {
    padding: 12px 12px;
    width: inherit;
    height: 170px;
    gap: 16px;
  }
  @media (max-width: 585px) {
    width: 85%;
    height: 192px;
    padding: 24px 24px;
  }

  :hover {
    box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
    transition: var(--transition-slow);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    @media (max-width: 992px) {
      /* border: 2px solid green; */
      width: auto;
      gap: 6px;
    }
  }
  img {
    height: 48px;
    width: 48px;
    border-radius: 28px;
    @media (max-width: 992px) {
      /* border: 2px solid red; */
      height: 45px;
      width: 45px;
    }
  }
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #667085;
    text-align: left;
    @media (max-width: 1080px) {
      font-size: 12px;
    }
    @media (max-width: 992px) {
      font-size: 11px;
    }
    @media (max-width: 585px) {
      font-size: 12.5px;
    }
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #101828;
    font-style: normal;
    margin: 0;
    @media (max-width: 992px) {
      font-size: 34px;
    }
    @media (max-width: 585px) {
      font-size: 36px;
    }
  }
`;

export default FloatingOverview;
