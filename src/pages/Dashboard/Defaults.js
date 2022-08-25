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
  }
  .search-bar {
    margin-top: 98px;
    margin-bottom: 38px;
  }
  .bordered {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default Defaults;
