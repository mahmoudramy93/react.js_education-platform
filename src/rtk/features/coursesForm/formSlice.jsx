import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesInputs: {},
  lessonsInputs: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCoursesInputs: (state, action) => {
      state.coursesInputs = action.payload;
    },
    setLessonsInputs: (state, action) => {
      state.lessonsInputs = action.payload;
    },
    resetInputs: (state) => {
      state.coursesInputs = {};
      state.lessonsInputs = {};
    },
  },
});

export const { setCoursesInputs, setLessonsInputs, resetInputs } =
  formSlice.actions;
export default formSlice.reducer;
