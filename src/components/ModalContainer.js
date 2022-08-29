import React from "react";
import styled from "styled-components";
import { closeModal } from "../features/dashboardSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ModalContainer = ({ children }) => {
  const { isModal } = useSelector((store) => store.dashboard);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeSelf = (e) => {
    if (e.target.classList.contains("modal")) {
      console.log("hello");
      dispatch(closeModal());
      navigate("/reconcilation");
    }
  };

  return (
    <Wrapper
      onClick={closeSelf}
      className={isModal ? "show-modal modal" : "modal"}
    >
      <div className="modal-center">{isModal && children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* STYLES FOR 'show-modal' IN 'SharedLayout' COMPONENT */

  opacity: 0;
  /* width: 0; */
  /* height: 0; */
  /* position: absolute; */
  z-index: -99999;
  display: none;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  .modal-center {
    display: flex;
    opacity: 0;
    /* width: 0; */
    /* height: 0; */
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(34, 34, 34, 0.05);
    border-radius: 8px;
  }
`;

export default ModalContainer;
