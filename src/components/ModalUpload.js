import React from "react";
import styled from "styled-components";
import { arrowLeft } from "../assets/icons";
import { uploadFile } from "../assets/images";
import { toast } from "react-toastify";
import { closeModal } from "../features/dashboardSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../features/dashboardSlice";

const ModalUpload = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const upload = (e) => {
    e.preventDefault();
    toast.success("Upload Successful 🔗");
    setTimeout(() => {
      dispatch(closeModal());
      navigate("/reconcilation");
    }, 3000);
  };

  const goBack = (num) => {
    navigate("/reconcilation/connect-account");
    dispatch(toggleModal(num));
  };

  return (
    <Wrapper>
      <button type="button" onClick={() => goBack(2)} className="top">
        <img src={arrowLeft} alt="back arrow" />
        <p>Go Back</p>
      </button>
      <form onSubmit={upload}>
        <div className="middle">
          <img src={uploadFile} alt="upload icon" />
          <p>Click to upload PDF file</p>
          <input
            name="upload"
            type="file"
            single={true}
            onChange={() => toast.success("file selected")}
            className="file-input"
            accept="application/pdf"
          />
        </div>
        <button type="submit" className="bottom">
          <p>Submit</p>
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 480px;
  height: 388px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(34, 34, 34, 0.05);
  border-radius: 8px;
  padding: 24px 24px;
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    height: 32px;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.03em;
      color: #222222;
    }
  }
  .middle {
    position: relative;
    margin: 48px 0 50px;
    width: 432px;
    height: 138px;
    background: #fbfbfb;
    border: 1.8px dashed #c5c5c5;
    border-radius: 10px;

    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #808080;
    }
  }
  .file-input {
    height: 100%;
    border: 2px solid blue;
    position: absolute;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .bottom {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px 185px;
    width: 431px;
    height: 70px;
    background: #80b539;
    border-radius: 10px;
    transition: var(--transition-slow);
    border: none;
    :hover {
      transition: var(--transition-slow);
      cursor: pointer;
      box-shadow: 0px 1px 4px rgba(16, 24, 40, 0.4);
    }
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
    }
  }
`;

export default ModalUpload;
