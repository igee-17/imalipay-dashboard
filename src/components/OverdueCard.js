import styled from "styled-components";
import { dollar } from "../assets/images";
import { Status } from "../components";

const OverdueCard = (props) => {
  const { number, text, color, fontColor } = props;
  return (
    <Wrapper>
      <div className="item-left">
        <img src={dollar} alt="hello" />
        <div className="info">
          <h4>{number} Payment</h4>
          <p>21 Jul, 2022</p>
        </div>
        <Status {...props} />
      </div>
      <h3>NGN 34,600</h3>
    </Wrapper>
  );
};
// text="overdue" color="#FEF3F2" fontColor="#B42318"
const Wrapper = styled.section`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .item-left {
    display: flex;
    align-items: center;
  }
  .info {
    /* border: 2px solid blue; */
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: 83px;
    height: 36px;
    h4 {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #101010;
      margin: 0;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #808080;
    }
  }
  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #101010;
  }
  /* .status {
    border: 2px solid red;
  } */
`;

export default OverdueCard;
