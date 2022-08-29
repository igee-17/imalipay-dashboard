import { createSlice } from "@reduxjs/toolkit";
// import here from components

const initialState = {
  index: 0,
  isModal: false,
  isSidebar: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleModal: (state, actions) => {
      state.index = actions.payload;
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
    openSidebar: (state) => {
      state.isSidebar = true;
    },
    closeSidebar: (state) => {
      state.isSidebar = false;
    },
  },
});

export const { toggleModal, closeModal, openSidebar, closeSidebar } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
