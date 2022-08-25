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
  margin-bottom: 16px;

  .name-item {
    width: 203px;
    height: 77px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name-label {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #808080;
      margin-bottom: 8px;
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
    }
  }
  .name-right {
    .label-container {
      width: 179px;
    }
    display: flex;
    align-items: flex-end;

    input {
    }
  }
`;

export default InputNames;
