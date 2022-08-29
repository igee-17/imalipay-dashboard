import styled from "styled-components";

const AmountTop = ({ titleOne, titleTwo, valueOne, valueTwo, month }) => {
  return (
    <Wrapper className={!month && "amount-top"}>
      <div className="content-center">
        <div className="left amount-item">
          <p>{titleOne}</p>
          {month ? (
            <h3>
              {valueOne} <span> /Month</span>
            </h3>
          ) : (
            <h3>${valueOne}</h3>
          )}
        </div>
        <div className="amount-right amount-item">
          <div className="container">
            <p>{titleTwo}</p>
            <h3>{valueTwo}</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* STYLES FOR CLASSNAME 'amount-top' in PARENT ELEMENT (if unique styling needed) */

  border: 1px solid #eaecf0;
  margin: 16px 0 32px;
  width: 100%;
  height: 89px;
  left: 918px;
  top: 330px;
  padding: 16px 24px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1352px) {
    height: 120px;
  }
  @media (max-width: 992px) {
    padding: 12px 20px;
  }
  @media (max-width: 585px) {
    padding: 4px;
    height: 80px;
  }
  .content-center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .amount-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 50%;
      height: 57px;
      @media (max-width: 992px) {
        height: 70%;
        gap: 6px;
      }
    }
    .amount-right {
      border-left: 1px solid #d9d9d9;
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-left: 37px;
      @media (max-width: 992px) {
        padding-left: 30px;
      }
      @media (max-width: 585px) {
        padding-left: 10px;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        @media (max-width: 992px) {
          gap: 6px;
        }
      }
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    @media (max-width: 992px) {
      font-size: 11px;
    }
    @media (max-width: 585px) {
      font-size: 8px;
    }
  }
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #101828;
    @media (max-width: 992px) {
      font-size: 22px;
    }
    @media (max-width: 585px) {
      font-size: 11px;
    }
    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #101010;
      transform: translateX(3px);
      @media (max-width: 992px) {
        font-size: 10px;
      }
      @media (max-width: 585px) {
        font-size: 8px;
      }
    }
  }
`;

export default AmountTop;
