import { useState } from "react";
import styled from "styled-components";
import { notification, eclipse, arrowDown } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import Animate from "./AnimationContainer";
import { toast } from "react-toastify";
import { moreVertical } from "../assets/icons";
import { openSidebar } from "../features/dashboardSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const logOut = () => {
    toast.warning("logging out...");
    setTimeout(() => {
      toggleDropdown();
      navigate("/");
    }, 2000);
  };

  return (
    <Wrapper>
      <section className="nav-center">
        <div className="left">
          <main>
            <h2>Hello, Alex</h2>
            <p>Here's what going on with your account</p>
          </main>
        </div>
        <div className="middle">
          <aside>
            <img
              src={notification}
              alt="notification-icon"
              className="notification"
            />
            <div className="line"></div>
            <section className="profile-container">
              <img src={eclipse} alt="eclipse" className="eclipse" />
              <article className="drop-down">
                <Animate>
                  <div className="name" onClick={toggleDropdown}>
                    <h3>Alex</h3>
                    <button className="btn">
                      <img src={arrowDown} alt="arrow down" />
                    </button>
                  </div>
                </Animate>
                <p>Vendor ID: 3945823</p>
              </article>
              <div className={isOpen ? "options active" : "options"}>
                <Link
                  to="reconcilation"
                  className="profile item"
                  onClick={toggleDropdown}
                >
                  <p>reconcilation</p>
                </Link>
                <button to="/" className="logout item" onClick={logOut}>
                  <p>logout</p>
                </button>
              </div>
            </section>
          </aside>
        </div>
        <button
          type="button"
          onClick={() => dispatch(openSidebar())}
          className="button"
        >
          <img src={moreVertical} alt="toggle button" className="toggle-btn" />
        </button>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  /*
$desktop:1200px;
$laptop: 1024px;
$tablet: 768px;
$phone: 480px; 
*/
  background: #ffffff;
  position: fixed;
  z-index: 999;
  height: 82px;
  width: calc(100vw - 307px);
  left: 307px;
  border-radius: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid #e5e5e5;
  display: flex;
  justify-content: center;
  @media (max-width: 992px) {
    top: 0;
    width: 100%;
    left: 0;
    /* border: 2px solid red; */
  }
  .nav-center {
    display: grid;
    width: calc(100vw - 403px);
    justify-content: space-between;
    grid-template-columns: auto auto;
    align-items: center;
    @media (max-width: 992px) {
      grid-template-columns: 1fr auto auto;
      min-width: 85%;
    }
    @media (max-width: 585px) {
      min-width: 90%;
    }
  }
  .button {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      border-radius: 5px;
      border: 1.5px solid #dcdcdc;
      /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4); */
      box-shadow: 0px 1px 8px rgba(16, 24, 40, 0.1);
      transition: var(--transition-ease);
      :hover {
        box-shadow: none;
        cursor: pointer;
        transition: var(--transition-ease);
      }
    }
  }
  main {
    height: 50px;
    /* margin-left: 48px; */
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    h2 {
      font-family: Inter;
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: -0.03em;
      text-align: left;
      margin-bottom: 4px;
      color: #222222;
      @media (max-width: 992px) {
        font-size: 20px;
      }
      @media (max-width: 585px) {
        font-size: 17px;
      }
    }
    p {
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #707070;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
  }
  aside {
    /* border: 2px solid purple; */
    display: flex;
    flex-direction: row;
    /* margin-left: 438px; */
    width: 258.33px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
      width: auto;
    }
    .notification {
      height: 32px;
      width: 32px;
      cursor: pointer;
      @media (max-width: 992px) {
        display: none;
        height: 25px;
        width: 25px;
      }
    }
    .profile-container {
      width: 165px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      @media (max-width: 992px) {
        width: 140px;
      }
      .eclipse {
        width: 42px;
        height: 42px;
        margin-right: 8px;
        @media (max-width: 992px) {
          margin-right: 4px;
          width: 32px;
          height: 32px;
        }
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        text-align: left;
        color: #707070;
        @media (max-width: 992px) {
          font-size: 10px;
        }
      }
    }
    .line {
      width: 39px;
      height: 0px;
      border: 1px solid #eaeaea;
      transform: rotate(90deg);
      @media (max-width: 992px) {
        width: 30px;
      }
    }
    .drop-down {
      text-decoration: none;
      cursor: pointer;
    }
    .name {
      display: flex;
      align-items: center;
      width: 66px;
      justify-content: space-between;
      @media (max-width: 992px) {
        width: 50px;
      }
      h3 {
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        text-align: left;
        color: #222222;
        @media (max-width: 992px) {
          font-size: 13px;
        }
      }
      :hover {
        cursor: pointer;
      }
    }
    .btn {
      background: transparent;
      border: none;
      img {
        width: 24px;
        height: 24px;
        @media (max-width: 992px) {
          width: 20px;
          height: 20px;
        }
      }
    }
    .options {
      position: absolute;
      height: 210%;
      width: 110%;
      opacity: 0;
      transform: translateY(50%);
      z-index: -1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10%;
      background: #ffffff;
      border: 1.5px solid #dcdcdc;
      border-radius: 10px;
      transition: all 0.2s ease-out 0s;
    }
    .active {
      opacity: 1;
      z-index: 999;
      transform: translateY(100%);
      transition: all 0.2s ease-out 0s;
    }
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      height: 40%;
      width: 80%;
      flex-direction: row;
      padding: 9px 15px;
      border-radius: 8px;
      text-decoration: none;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #101010;
      }
      :hover {
        cursor: pointer;
      }
    }
    .profile {
      background: #ffbd2e;
    }
    .logout {
      background: #ff4242;
      border: none;
    }
  }
`;
export default Navbar;
