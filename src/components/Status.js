import styled from "styled-components";

const Status = ({ text, color, fontColor }) => {
  return (
    <Wrapper
      className="status"
      style={{ backgroundColor: color, color: fontColor }}
    >
      <p>{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  /* width: 65px; */
  height: 22px;
  text-transform: capitalize;

  /* Error/50 */

  /* background: ; */
  border-radius: 16px;
`;

export default Status;
