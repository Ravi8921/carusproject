import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    // { id: 1, name: "", icon: "icon-bed" },
    // { id: 2, name: "", icon: "icon-destination" },
    // { id: 3, name: "", icon: "icon-ski" },
    // { id: 4, name: " ", icon: "icon-home" },
    // { id: 5, name: "", icon: "icon-car" },
    // { id: 6, name: "", icon: "icon-yatch" },
    // { id: 7, name: "", icon: "icon-tickets" },
  ],
  currentTab: "Hotel",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
