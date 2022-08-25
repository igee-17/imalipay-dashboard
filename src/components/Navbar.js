import { useState } from "react";
import styled from "styled-components";
import { notification, eclipse, arrowDown } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import Animate from "./AnimationContainer";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
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
      <main>
        <h2>Hello, Alex</h2>
        <p>Here's what going on with your account</p>
      </main>
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
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
  /* border: 2px solid green; */
  border-bottom: 1.5px solid #e5e5e5;
  main {
    height: 50px;
    margin-left: 48px;
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
    }
    p {
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;

      color: #707070;
    }
  }
  aside {
    display: flex;
    flex-direction: row;
    margin-left: 438px;
    width: 258.33px;
    justify-content: space-between;
    align-items: center;
    .notification {
      height: 32px;
      width: 32px;
    }
    .profile-container {
      width: 165px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      .eclipse {
        width: 42px;
        height: 42px;
        margin-right: 8px;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        text-align: left;
        color: #707070;
      }
    }
    .line {
      width: 39px;
      height: 0px;

      border: 1px solid #eaeaea;
      transform: rotate(90deg);
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
      h3 {
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        text-align: left;
        color: #222222;
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
