import { createSlice } from "@reduxjs/toolkit";
// import here from components

const initialState = {
  index: 0,
  isModal: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleModal: (state, actions) => {
      // const { index } = state;
      state.index = actions.payload;
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
  },
});

export const { toggleModal, closeModal } = dashboardSlice.actions;

export default dashboardSlice.reducer;
