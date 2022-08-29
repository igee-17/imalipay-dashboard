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
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
  @media (max-width: 992px) {
    width: 80vw;
    margin: 120px 0px;
  }
  @media (max-width: 585px) {
    display: flex;
    width: 85vw;
    flex-direction: column;
  }

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
    @media (max-width: 992px) {
      font-size: 20px;
    }
    @media (max-width: 585px) {
      width: 90%;
      padding-left: 30px;
    }
  }
  .features {
    /* border: 2px solid blue; */
    height: 42px;
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 585px) {
      height: auto;
      align-items: flex-start;
      margin-bottom: 34px;
      padding-left: 30px;
    }
    .left {
      /* border: 2px solid red; */
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
      @media (max-width: 992px) {
        width: 20%;
        gap: 0px;
        justify-content: space-between;
        padding: 0px;
        align-items: center;
      }
      @media (max-width: 585px) {
        flex-direction: row-inverse;
        padding: 5px 10px;
        width: 120px;
        height: 32px;
      }
      :hover {
        box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.45);

        transition: var(--transition-slow);
        cursor: pointer;
      }
      img {
        width: 24px;
        height: 24px;
        @media (max-width: 992px) {
          width: 30px;
          height: 30px;
        }
        @media (max-width: 585px) {
          width: 20px;
          height: 20px;
          /* border: 2px solid green; */
        }
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #101010;
        @media (max-width: 992px) {
          font-size: 12px;
        }
        @media (max-width: 585px) {
          font-size: 11px;
        }
      }
    }
    .right {
      /* border: 2px solid purple; */
      height: 100%;
      width: auto;
      display: flex;
      @media (max-width: 992px) {
        width: 70%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
      }
      @media (max-width: 585px) {
        display: flex;
        flex-direction: column;
        height: auto;
        align-items: flex-end;
        gap: 20px;
      }
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
      @media (max-width: 992px) {
        padding: 20px 10px;
        width: auto;
      }
      @media (max-width: 585px) {
        padding: 10px 10px;
        height: 32px;
        justify-content: flex-start;
      }

      :hover {
        box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.45);
        transition: var(--transition-slow);
        cursor: pointer;
      }
      img {
        width: 24px;
        height: 24px;
        @media (max-width: 992px) {
          width: 30px;
          height: 30px;
        }
        @media (max-width: 585px) {
          width: 24px;
          height: 24px;
          /* border: 2px solid green; */
        }
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        @media (max-width: 992px) {
          font-size: 9px;
        }
        @media (max-width: 585px) {
        }
      }
    }
    .erp {
      background: #ffbd2e;
      width: 151px;
      @media (max-width: 992px) {
        width: auto;
      }
      @media (max-width: 585px) {
        width: 130px;
      }
      p {
        color: #101010;
      }
    }
    .csv {
      background: #80b539;
      margin: 0 16px;
      width: 145px;
      @media (max-width: 992px) {
        width: auto;
      }
      @media (max-width: 585px) {
        width: 130px;
        margin: 0;
      }
    }
    .account {
      background: #222222;
      width: 181px;
      @media (max-width: 992px) {
        width: auto;
      }
      @media (max-width: 585px) {
        width: 130px;
      }
    }
  }
  .cards-container {
    margin-bottom: 32px;
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
    /* 585px */
    @media (max-width: 784px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 80%;
      padding-left: 30px;
    }
  }
  .card-item:hover {
    box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
    transition: var(--transition-slow);
  }
  .customers-info {
    margin-bottom: 24px;
    border-radius: 10px;
    width: 100%;
    @media (max-width: 1330px) {
      overflow-x: scroll;
      overflow-y: hidden;
    }
    @media (max-width: 585px) {
      height: auto;
      margin-bottom: 0px;
    }
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
