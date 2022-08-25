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
  }

  .center {
    height: 52px;
    background: #fafafa;
    border-radius: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 96px auto;
    align-items: center;
  }
  input {
    background: transparent;
    border: none;
    margin-left: 11.53px;
    padding-left: 10px;
  }
  .label {
    padding-left: 16px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #222222;
    }
  }
`;

export default InputWide;
