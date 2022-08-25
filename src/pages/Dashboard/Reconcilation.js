import React from "react";
import styled from "styled-components";
import {
  SearchBar,
  InfoHeaderRecon,
  InfoCardRecon,
  FloatingReconcilation,
  ModalContainer,
  ModalUpload,
  ModalAccount,
  ModalErpMain,
} from "../../components";

import {
  floatingReconCardData,
  infoConstReconData,
  infoHeaderReconData,
} from "../../utils/reconcilationData";

import {
  account,
  link,
  description,
  filterAlt,
  arrowDownIos,
} from "../../assets/icons";

import { toggleModal } from "../../features/dashboardSlice";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const modalArray = [<ModalErpMain />, <ModalUpload />, <ModalAccount />];

const Reconcilation = () => {
  const dispatch = useDispatch();
  const toggle = (num) => {
    dispatch(toggleModal(num));
  };

  const { index } = useSelector((store) => store.dashboard);
  const modalItem = modalArray[index];

  return (
    <>
      <ModalContainer>{modalItem}</ModalContainer>
      <Wrapper>
        <h2 className="heading">Account Summary</h2>
        <div className="features">
          <div className="left ">
            <img src={filterAlt} alt="imga" />
            <p className="text">Today</p>

            <img src={arrowDownIos} alt="imga" />
          </div>
          <aside className="right">
            <Link
              to="/reconcilation/connect-erp"
              className="erp item"
              onClick={() => toggle(0)}
            >
              <img src={link} alt="imga" />
              <p className="text">Connect ERP</p>
            </Link>
            <Link
              to="/reconcilation/upload"
              className="csv item"
              onClick={() => toggle(1)}
            >
              <img src={description} alt="imga" />
              <p className="text">Upload CSV</p>
            </Link>
            <Link
              to="/reconcilation/connect-account"
              className="account item"
              onClick={() => toggle(2)}
            >
              <img src={account} alt="imga" />
              <p className="text">Connect Account</p>
            </Link>
          </aside>
        </div>
        <div className="cards-container">
          {floatingReconCardData.map((item) => {
            return <FloatingReconcilation key={item.id} {...item} />;
          })}
        </div>
        <div className="line-break"></div>
        <SearchBar />
        <div className="customers-info">
          <InfoHeaderRecon {...infoHeaderReconData} />
          {infoConstReconData.map((info) => {
            return <InfoCardRecon key={info.id} {...info} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  min-width: 403px;
  width: calc(100vw - 403px);
  max-width: 80vw;
  margin-top: 107px;

  .profile {
    h3 {
      text-transform: capitalize;
    }
  }

  .heading {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    margin-bottom: 36px;
  }
  .features {
    height: 42px;
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 9px 15px;
      gap: 10px;
      width: 139px;
      height: 42px;
      background: #eaecf0;
      border-radius: 8px;
      transition: var(--transition-slow);
      :hover {
        box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.45);

        transition: var(--transition-slow);
        cursor: pointer;
      }
      img {
        width: 24px;
        height: 24px;
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #101010;
      }
    }
    .right {
      height: 100%;
      width: auto;
      display: flex;
    }
    .item {
      width: 151px;
      height: 100%;
      border: none;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 151px;
      height: 42px;
      border-radius: 8px;
      transition: var(--transition-slow);

      :hover {
        box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.45);
        transition: var(--transition-slow);
        cursor: pointer;
      }
      .image {
        width: 24px;
        height: 24px;
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
      }
    }
    .erp {
      background: #ffbd2e;
      width: 151px;
      p {
        color: #101010;
      }
    }
    .csv {
      background: #80b539;
      margin: 0 16px;
      width: 145px;
    }
    .account {
      background: #222222;
      width: 181px;
    }
  }
  .cards-container {
    margin-bottom: 32px;
    width: 100%;
    min-height: 192px;
    display: flex;
    justify-content: space-between;
    gap: 4px;
  }
  .customers-info {
    margin-bottom: 24px;
    border-radius: 10px;
    width: 100%;
  }
  .bordered {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .line-break {
    width: 100%;
    height: 0px;
    border: 1px solid #ababab;
    margin-bottom: 32px;
  }
`;

export default Reconcilation;
