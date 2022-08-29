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
  min-width: 403px;
  width: calc(100vw - 403px);
  margin-top: 141px;
  @media (max-width: 992px) {
    width: 90vw;
    margin: 120px 0px;
  }
  @media (max-width: 585px) {
    display: flex;
    width: 85vw;
    flex-direction: column;
  }
  .heading {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    margin-bottom: 36px;
    @media (max-width: 992px) {
      font-size: 20px;
    }
    @media (max-width: 585px) {
      width: 85%;
    }
  }
  .cards-container {
    margin-bottom: 48px;
    width: 100%;
    min-height: 192px;
    display: flex;
    justify-content: space-between;
    gap: 4px;
    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 585px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 80%;
      /* border: 2px solid red; */
      align-items: center;
    }
  }
  .customers-info {
    border-radius: 10px;
    width: 100%;
    @media (max-width: 1210px) {
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
  .bordered {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default Overview;
