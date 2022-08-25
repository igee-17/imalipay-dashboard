import React from "react";
import { check } from "../assets/icons";
import styled from "styled-components";

export const Verified = ({ text }) => {
  console.log(text);
  return (
    <Wrapper>
      <img src={check} alt="check image" className="image" />
      <p>{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px 2px 6px;
  gap: 4px;
  width: 75px;
  height: 22px;
  background: #ecfdf3;
  border-radius: 16px;
  .image {
    width: 12px;
    height: 12px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #027a48;
  }
`;
