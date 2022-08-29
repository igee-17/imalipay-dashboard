import styled from "styled-components";
import { dollar } from "../assets/images";
import { Status } from "../components";

const OverdueCard = (props) => {
  const { number } = props;
  return (
    <Wrapper>
      <div className="item-left">
        <img src={dollar} alt="dollar" />
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
const Wrapper = styled.section`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    grid-template-columns: auto 1fr;
    gap: 10px;
    display: grid;
    height: 70px;
  }
  @media (max-width: 585px) {
    grid-template-columns: 1fr auto;
    gap: 0px;
    margin-bottom: 0px;
    /* height: 310px; */
  }
  .item-left {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      width: auto;
    }
    @media (max-width: 585px) {
      /* height: 310px; */
    }
  }
  img {
    @media (max-width: 992px) {
      width: 35px;
      height: 35px;
    }
    @media (max-width: 790px) {
      width: 30px;
      height: 30px;
    }
    @media (max-width: 585px) {
      width: 30px;
      height: 30px;
    }
  }
  .info {
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: 83px;
    height: 36px;
    @media (max-width: 992px) {
      width: auto;
      margin: 0 9px;
    }
    @media (max-width: 585px) {
      margin: 0 3px;
    }
    h4 {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #101010;
      margin: 0;
      @media (max-width: 1150px) {
        font-size: 12px;
      }
      @media (max-width: 992px) {
        font-size: 9px;
      }
      @media (max-width: 585px) {
        font-size: 8px;
      }
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #808080;
      @media (max-width: 1150px) {
        font-size: 11px;
      }
      @media (max-width: 992px) {
        font-size: 9px;
      }
      @media (max-width: 585px) {
        font-size: 8px;
      }
    }
  }
  .status {
    @media (max-width: 992px) {
      padding: 1px 4px;
    }
    @media (max-width: 585px) {
    }
    p {
      @media (max-width: 1150px) {
        font-size: 12px;
      }
      @media (max-width: 790px) {
        font-size: 9px;
      }
      @media (max-width: 585px) {
      }
    }
  }
  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #101010;
    @media (max-width: 992px) {
      text-align: center;
      font-size: 11px;
    }
    @media (max-width: 585px) {
      text-align: left;
      font-size: 9px;
    }
  }
`;

export default OverdueCard;
