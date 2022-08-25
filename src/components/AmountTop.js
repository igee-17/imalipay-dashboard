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
  /* border: 2px solid red; */
  width: 100%;
  height: 89px;
  left: 918px;
  top: 330px;
  padding: 16px 24px;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  .content-center {
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .amount-item {
      /* border: 2px solid brown; */
      display: flex;
      flex-direction: column;
      /* align-items: flex-start; */
      gap: 8px;
      /* width: 148px; */
      width: 50%;
      height: 57px;
    }
    .amount-right {
      border-left: 1px solid #d9d9d9;
      display: flex;
      flex-direction: column;
      /* align-items: flex-end; */
      padding-left: 37px;
      .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
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
    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #101010;
      transform: translateX(3px);
    }
  }
`;

export default AmountTop;
