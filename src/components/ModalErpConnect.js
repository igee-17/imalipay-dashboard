import { useState } from "react";
import styled from "styled-components";
import { xero } from "../assets/images";
import { toast } from "react-toastify";
import { closeModal } from "../features/dashboardSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ModalErpConnect = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const connectHandler = () => {
    toast.success("Connection Success 🌌");
    setTimeout(() => {
      dispatch(closeModal());
      navigate("/reconcilation");
    }, 3000);
  };

  return (
    <Wrapper>
      <h2>Connect your ERP</h2>
      <p className="heading-text">
        Connect your mobile account or bank statement to continue
      </p>
      <aside className="select" onClick={() => setIsOpen(!isOpen)}>
        <p className="text">ERP</p>
        <div className="erp">
          <p>Xero</p>
          <div className="loader"></div>
          <div className={isOpen ? "dropdown activeD" : "dropdown"}>
            <img src={xero} alt="xero logo" />
            <p>Xero</p>
          </div>
        </div>
      </aside>
      <button to="/reconcilation/connect-erp/connect" className="a">
        <div className="link" onClick={connectHandler}>
          <p> Connect</p>
        </div>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px 25px;
  width: 480px;
  height: 296px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(34, 34, 34, 0.05);
  border-radius: 8px;
  font-weight: 500;
  /* justify-content: center; */
  /* align-items: center; */

  @media (max-width: 992px) {
    /* border: 2px solid blue; */
    width: 100%;
    height: 100%;
  }
  h2 {
    font-size: 24px;
    line-height: 29px;
    color: #222222;
    margin-bottom: 4px;
    @media (max-width: 992px) {
      font-size: 22px;
    }
    @media (max-width: 585px) {
      font-size: 20px;
    }
  }
  .heading-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #808080;
    margin-bottom: 4px;
    @media (max-width: 992px) {
      font-size: 12px;
    }
    @media (max-width: 585px) {
      font-size: 10px;
    }
  }
  .text {
    font-size: 14px;
    line-height: 17px;
    color: #808080;
    margin-bottom: 33px;
    @media (max-width: 585px) {
      margin-bottom: 10px;
    }
  }
  .erp {
    position: relative;
    border: 1px solid #e5e5e5;
    width: 430px;
    height: 52px;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px;
    margin-bottom: 10px;
    transition: var(--transition-slow);
    @media (max-width: 992px) {
      width: 100%;
      height: 52px;
      font-size: 14px;
    }
    @media (max-width: 585px) {
    }

    :hover {
      cursor: pointer;
      background: var(--grey-primary-200);
      transition: var(--transition-slow);
    }

    .loader {
      width: 24px;
      height: 24px;
      left: 415px;
      top: 154px;
      border-radius: 50%;
      border: 2px solid rgba(128, 181, 57, 0.31);
      border-bottom: 2px solid #80b539;
      border-left: 2px solid #80b539;
      animation-name: rotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      @keyframes rotate {
        from {
          transform: rotate(-360deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
  .select {
    transition: var(--transition-slow);
  }

  .dropdown {
    position: absolute;
    width: 430px;
    height: 72px;
    background: #ffffff;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 8px;
    display: flex;
    opacity: 0;
    transform: translateY(20%) translateX(-16px);

    padding: 16px 16px;
    align-items: center;
    gap: 10px;
    z-index: -1;
    transition: all 0.2s ease-out 0s;
    @media (max-width: 992px) {
      width: 100%;
      height: 52px;
      font-size: 14px;
    }
    @media (max-width: 585px) {
    }
    img {
      width: 40px;
      height: 40px;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #344054;
    }
  }
  .activeD {
    opacity: 1;
    transition: all 0.2s ease-out 0s;
    transform: translateY(110%) translateX(-16px);
    z-index: 999;
  }

  .a {
    text-decoration: none;
    border-radius: 10px;
    border: none;
    @media (max-width: 992px) {
      width: 100%;
    }
    @media (max-width: 585px) {
    }
  }
  .link {
    border: 2px solid red;
    width: 430px;
    height: 70px;
    background: #80b539;
    border-radius: 10px;
    transition: var(--transition-slow);
    border: none;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 992px) {
      width: 100%;
      height: 52px;
      font-size: 14px;
    }
    @media (max-width: 585px) {
    }
    :hover {
      transition: var(--transition-slow);
      cursor: pointer;
      box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.1);
    }
  }
`;

export default ModalErpConnect;
