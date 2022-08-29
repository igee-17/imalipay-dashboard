import React from "react";
import styled from "styled-components";
import { search } from "../assets/icons";
import { toast } from "react-toastify";

const SearchBar = () => {
  return (
    <Wrapper className="search-bar">
      <div className="input-container">
        <img src={search} alt="search icon" />
        <input type="text" placeholder="Search for customer’s name" />
      </div>
      <button type="button" onClick={() => toast.success("Export Successful")}>
        <p>Export</p>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 16px;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media (max-width: 992px) {
    width: 160px;
    height: 48px;
  }
  @media (max-width: 585px) {
    width: 159px;
    height: 45px;
  } */
  .input-container {
    align-items: center;

    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    display: grid;
    grid-template-columns: 20px auto;
    gap: 8px;
    padding-left: 16px;
    height: 48px;
    width: 447px;
    @media (max-width: 640px) {
      width: 400px;
      height: 46px;
    }
    @media (max-width: 585px) {
      width: 300px;
      height: 43px;
    }
  }
  img {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 20px;
    width: 20px;
    border-radius: 0px;
    @media (max-width: 640px) {
      width: 19px;
      height: 19px;
    }
    @media (max-width: 585px) {
      width: 17px;
      height: 17px;
    }
  }
  input {
    background: #ffffff;
    border-radius: 10px;
    border: none;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  input::placeholder {
    color: #9b9b9b;
  }
  input:focus {
    outline: none;
  }
  button {
    padding: 14px, 16px;
    gap: 10px;
    width: 75px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s linear 0s;
    @media (max-width: 640px) {
      width: 73px;
      height: 46px;
    }
    @media (max-width: 585px) {
      width: 70px;
      height: 43px;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #222222;
      transition: all 0.2s linear 0s;
    }
  }
  button:hover {
    transform: scale(0.99);
    background: #eaeaea;
    transition: all 0.2s linear 0s;
  }
`;

export default SearchBar;
