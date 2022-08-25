import React from "react";
import styled from "styled-components";
import {
  SearchBar,
  InfoCardFulfilments,
  InfoHeaderFulfilments,
} from "../../components";
import {
  infoDataFulfilments,
  infoHeaderFulfilmentsData,
} from "../../utils/fulfilmentsData";

const Customers = () => {
  return (
    <Wrapper>
      <header className="header">
        <h2>Fulfilment</h2>
        <button className="register">
          <p className="text">register</p>
        </button>
      </header>
      <SearchBar />
      <div className="customers-info">
        <InfoHeaderFulfilments {...infoHeaderFulfilmentsData} />
        {infoDataFulfilments.map((item) => {
          return (
            <InfoCardFulfilments
              key={item.id}
              {...item}
              border={infoDataFulfilments.length}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-width: 403px;
  margin-top: 141px;

  width: calc(100vw - 403px);
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 51px;
    margin-bottom: 48px;

    h2 {
      height: 29px;
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      margin-bottom: 36px;
    }
    .register {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 97px;
      height: 51px;
      background: var(--green-primary-500);
      border-radius: 10px;
      transition: var(--transition-ease);

      :hover {
        cursor: pointer;
        transform: scale(0.98);
        background: var(--green-primary-400);
        transition: var(--transition-ease);
      }
    }
  }
  .text {
    text-transform: capitalize;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #ffffff;
  }

  .cards-container {
    margin-bottom: 48px;
    width: 100%;
    min-height: 192px;
    display: flex;
    justify-content: space-between;
    gap: 4px;
  }
  .card-item:hover {
    box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
    transition: var(--transition-slow);
  }
  .customers-info {
    width: 100%;
    left: 355px;
    top: 510px;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 45px;
  }
  .bordered {
    height: 55px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default Customers;
