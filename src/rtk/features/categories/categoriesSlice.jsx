import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    "all",
    "devops-engineer",
    "ios-developer",
    "data-engineer",
    "android-developer",
    "back-end",
    "front-end",
    "data-scientist",
    "data-analyst",
    "ux-designer",
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: () => {},
});

export default categoriesSlice.reducer;
