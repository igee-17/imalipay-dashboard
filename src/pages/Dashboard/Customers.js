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
  /* border: 2px solid blue; */
  min-width: 403px;
  width: calc(100vw - 403px);
  margin-top: 141px;

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    margin-bottom: 36px;
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
    height: 412px;
    left: 355px;
    top: 510px;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 107px;
  }
`;

export default Customers;
