import React from "react";
import styled from "styled-components";

const Pagination = () => {
  return (
    <Wrapper>
      <div className="page-center">
        <button className="item active">
          <p>1</p>
        </button>
        <button className="item ">
          <p>2</p>
        </button>
        <button className="item">
          <p>3</p>
        </button>
        <button className="item dots">
          <p>...</p>
        </button>
        <button className="item">
          <p>8</p>
        </button>
        <button className="item">
          <p>9</p>
        </button>
        <button className="item">
          <p>10</p>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 40px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  .page-center {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
  }
  .item {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    transition: var(--transition-ease);
    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #667085;
    }
  }
  .item:hover {
    transition: var(--transition-ease);

    background: #eaeaea;
  }
  .dots:hover {
    background: transparent;
    cursor: default;
  }
  .active {
    background: #eaeaea;
    p {
      color: #101010;
    }
  }
`;

export default Pagination;
