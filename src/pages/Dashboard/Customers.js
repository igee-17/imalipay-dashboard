import React from "react";
import styled from "styled-components";
import {
  FloatingCustomers,
  SearchBar,
  InfoHeaderCustomer,
  InfoCardCustomer,
} from "../../components";
import { infoData, infoHeaderData } from "../../utils/customersCardData";
import { infoDataCustomer } from "../../utils/infoData";

const Customers = () => {
  return (
    <Wrapper>
      <h2>Customers</h2>
      <div className="cards-container">
        {infoData.map((item) => {
          return <FloatingCustomers key={item.id} {...item} />;
        })}
      </div>
      <SearchBar />
      <div className="customers-info">
        <InfoHeaderCustomer {...infoHeaderData} />
        {infoDataCustomer.map((item) => {
          return <InfoCardCustomer key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-width: 403px;
  width: calc(100vw - 403px);
  margin-top: 141px;
  @media (max-width: 992px) {
    width: 80vw;
    margin: 120px 0px;
  }
  @media (max-width: 585px) {
    display: flex;
    width: 85vw;
    flex-direction: column;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    margin-bottom: 36px;
    @media (max-width: 992px) {
      font-size: 20px;
    }
  }
  .cards-container {
    margin-bottom: 48px;
    width: 100%;
    /* border: 2px solid red; */
    min-height: 192px;
    display: flex;
    justify-content: space-between;
    gap: 4px;
    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      /* grid-template-columns: auto auto auto; */
      gap: 8px;
    }
    @media (max-width: 585px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .card-item:hover {
    box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
    transition: var(--transition-slow);
  }
  .customers-info {
    width: 100%;
    height: 412px;
    left: 355px;
    top: 510px;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 107px;
    @media (max-width: 1330px) {
      /* width: min-content; */
      overflow-x: scroll;
      overflow-y: hidden;
    }
    @media (max-width: 585px) {
      height: 340px;
      margin-bottom: 0px;
    }
  }
`;

export default Customers;
