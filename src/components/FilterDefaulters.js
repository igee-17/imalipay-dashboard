import React from "react";
import styled from "styled-components";
import { filterList } from "../assets/icons";

const FilterDefaulters = () => {
  return (
    <Wrapper>
      <div className="content">
        <img src={filterList} alt="filter list" />
        <p>Filter</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 585px) {
    margin-bottom: 30px;
    justify-content: flex-start;
    width: 80%;
    padding-left: 30px;
  }

  .content {
    display: flex;
    align-items: center;
    padding-left: 19px;
    width: 169px;
    height: 52px;
    background: #ffffff;
    border: 1.5px solid #dcdcdc;
    border-radius: 10px;
    transition: all 0.2s linear 0s;
    @media (max-width: 992px) {
      width: 160px;
      height: 48px;
    }
    @media (max-width: 585px) {
      width: 159px;
      height: 45px;
    }
    img {
      margin-right: 8px;
      @media (max-width: 992px) {
        width: 22px;
        height: 22px;
      }
      @media (max-width: 585px) {
        width: 20px;
        height: 20px;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #222222;
      @media (max-width: 992px) {
        font-size: 13px;
      }
      @media (max-width: 585px) {
        font-size: 12px;
      }
    }
    :hover {
      cursor: pointer;
      transform: scale(0.99);
      transition: all 0.2s linear 0s;
      background: var(--grey-primary-200);
    }
  }
`;

export default FilterDefaulters;
