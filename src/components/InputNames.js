import styled from "styled-components";
import { toast } from "react-toastify";

const InputNames = ({ labelOne, labelTwo, valueOne, valueTwo }) => {
  return (
    <Wrapper className="names">
      <div className="name-left name-item">
        <label htmlFor={labelOne} className="name-label">
          {labelOne}
        </label>
        <input
          name={labelOne}
          id={labelOne}
          value={valueOne}
          type="text"
          onChange={() => toast.error("Unauthorised! Contact Admin.🙃")}
        />
      </div>
      <div className="name-right name-item">
        <div className="label-container">
          <label htmlFor={labelTwo} className="name-label">
            {labelTwo}
          </label>
        </div>
        <input
          name={labelTwo}
          id={labelTwo}
          value={valueTwo}
          type="text"
          onChange={() => toast.error("Unauthorised! Contact Admin.🙃")}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 16px;
  @media (max-width: 992px) {
    /* border: 2px solid red; */
  }
  @media (max-width: 585px) {
    /* height: 310px; */
  }

  .name-item {
    width: 203px;
    height: 77px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1330px) {
      height: 70px;
      width: 45%;
    }
    @media (max-width: 992px) {
      height: 60px;
      width: 45%;
    }
    @media (max-width: 585px) {
      width: 48%;
    }
    .name-label {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #808080;
      margin-bottom: 8px;
      @media (max-width: 1330px) {
        width: 100%;
      }
      @media (max-width: 992px) {
        /* line-height: normal; */
        font-size: 12px;
        margin-bottom: 0;
        width: 100%;
      }
      @media (max-width: 585px) {
        font-size: 9px;
      }
    }
    input {
      width: 179px;
      height: 52px;
      background: #fafafa;
      border-radius: 10px;
      padding: 0px 16px;

      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      border: none;

      color: #101010;
      @media (max-width: 1330px) {
        font-size: 12px;
        height: 45px;
        width: 100%;
      }
      @media (max-width: 992px) {
        padding: 0px 12px;
        height: 35px;
        font-size: 10px;
        width: 100%;
      }
      @media (max-width: 585px) {
        padding: 0px 8px;
      }
    }
  }
  .name-right {
    .label-container {
      width: 179px;
      @media (max-width: 1330px) {
        margin-bottom: 8px;
        width: 100%;
      }
      @media (max-width: 992px) {
        margin-bottom: 0;
        width: 100%;
      }
      @media (max-width: 585px) {
      }
    }
    display: flex;
    align-items: flex-end;

    input {
    }
  }
`;

export default InputNames;
