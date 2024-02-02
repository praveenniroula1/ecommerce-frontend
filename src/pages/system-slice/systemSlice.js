import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: true,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSystem: (state, { payload }) => {
      state.system = payload;
    },
  },
});

const { reducer, actions } = systemSlice;
export const { setSystem } = actions;
export default reducer;
