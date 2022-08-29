import { country } from "../assets/images";
import { arrowDownSmall } from "../assets/icons";
import styled from "styled-components";
import { toast } from "react-toastify";

const InputWide = ({ label, value, image, id }) => {
  return (
    <Wrapper className={!image && "address"}>
      <label htmlFor={id} className="phone-label">
        {label}
      </label>
      <div className="center">
        {image && (
          <label htmlFor={id} className="label">
            <img src={country} alt="country" />
            <p>+254</p>
            <img src={arrowDownSmall} alt="arrow" />
          </label>
        )}
        <input
          id={id}
          name="number"
          type="text"
          value={value}
          onChange={() => toast.error("Unauthorised! Contact Admin.🙃")}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  /* STYLES For CLASSNAME-'address' IN PARENT ELEMENT */

  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  .phone-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #808080;
    margin-bottom: 8px;
    @media (max-width: 992px) {
      font-size: 12px;
    }
    @media (max-width: 585px) {
      font-size: 10px;
    }
  }

  .center {
    height: 52px;
    background: #fafafa;
    border-radius: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 96px auto;
    align-items: center;
    @media (max-width: 992px) {
      grid-template-columns: 86px auto;
      height: 45px;
    }
    @media (max-width: 585px) {
      grid-template-columns: 76px auto;
      height: 40px;
    }
  }
  input {
    background: transparent;
    border: none;
    margin-left: 11.53px;
    height: 100%;
    padding-left: 10px;
    @media (max-width: 1330px) {
      padding-left: 0 10px 0;
      width: 100%;
    }
    @media (max-width: 992px) {
      /* width: 75%; */
      margin-left: 0px;
      padding-left: 5px;
      font-size: 12px;
      /* height: 45px; */
      padding-left: 0 8px 0;
    }
    @media (max-width: 585px) {
      width: 100%;
      font-size: 10px;
      padding: 0 6px 0;
      height: 100%;
    }
  }
  .label {
    padding-left: 16px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 992px) {
      width: 40%;
      padding-left: 8px;
    }
    @media (max-width: 585px) {
      padding-left: 6px;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
      @media (max-width: 992px) {
        width: 20px;
        height: 20px;
      }
      @media (max-width: 585px) {
        width: 17px;
        height: 17px;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #222222;
      @media (max-width: 992px) {
        font-size: 12px;
      }
      @media (max-width: 585px) {
        font-size: 10px;
      }
    }
  }
`;

export default InputWide;
