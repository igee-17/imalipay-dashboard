import React from "react";
import styled from "styled-components";
import {
  FloatingDefaulters,
  SearchBar,
  InfoHeaderDefaults,
  InfoCardDefaults,
  FilterDefaulters,
  Pagination,
} from "../../components";

import {
  floatingDefaultersCardData,
  infoHeaderDefaultsData,
  infoDataDefaults,
} from "../../utils/defaultersData";

const Defaults = () => {
  return (
    <Wrapper>
      <FilterDefaulters />
      <h2>Defaults</h2>
      <div className="cards-container">
        {floatingDefaultersCardData.map((item) => {
          return <FloatingDefaulters key={item.id} {...item} />;
        })}
      </div>
      <SearchBar />
      <div className="customers-info">
        <InfoHeaderDefaults {...infoHeaderDefaultsData} />
        {infoDataDefaults.map((item) => {
          return <InfoCardDefaults key={item.id} {...item} />;
        })}
      </div>
      <Pagination />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-width: 403px;
  max-width: 80vw;
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
    min-height: 192px;
    display: flex;
    justify-content: space-between;
    gap: 4px;
    /* border: 2px solid red; */
    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
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
    @media (max-width: 1330px) {
      overflow-x: scroll;
      overflow-y: hidden;
    }
    @media (max-width: 585px) {
      height: auto;
      margin-bottom: 0px;
    }
  }
  .search-bar {
    margin-top: 98px;
    margin-bottom: 38px;
    @media (max-width: 585px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .bordered {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default Defaults;
