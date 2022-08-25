import React from "react";
import styled from "styled-components";
import {
  FloatingOverview,
  SearchBar,
  InfoHeader,
  InfoCard,
  Pagination,
} from "../../components";
import { infoData } from "../../utils/infoData";
import { cardData, infoHeaderData } from "../../utils/overviewCardData";

const Overview = () => {
  return (
    <Wrapper>
      <h2 className="heading">Overview</h2>
      <div className="cards-container">
        {cardData.map((item) => {
          return <FloatingOverview key={item.id} {...item} />;
        })}
      </div>
      <SearchBar />
      <div className="customers-info">
        <InfoHeader {...infoHeaderData} />
        {infoData.map((info) => {
          return <InfoCard key={info.id} {...info} />;
        })}
      </div>
      <Pagination />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* border: 2px solid blue; */
  min-width: 403px;
  width: calc(100vw - 403px);
  max-width: 80vw;
  margin-top: 141px;

  .heading {
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
  .customers-info {
    /* margin-bottom: 24px; */
    border-radius: 10px;
    /* border: 2px solid red; */
    width: 100%;
  }
  .bordered {
    /* border: 2px solid red; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default Overview;
