import { createSlice } from "@reduxjs/toolkit";
import {
  addLesson,
  fetchLessonById,
  fetchLessons,
  getLessonsByCourseId,
  updateLesson,
} from "./lessonsActions";

const initialState = {
  lessons: [],
  success: false,
};

const LessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    resetSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addLesson.fulfilled, (state, action) => {
      state.lessons.push(action.payload);
      state.success = true;
    });
    builder.addCase(fetchLessons.fulfilled, (state, action) => {
      state.lessons = action.payload;
    });
    // fetch lesson by id
    builder.addCase(fetchLessonById.fulfilled, (state, action) => {
      state.lessons = action.payload;
    });
    // update lesson
    builder.addCase(updateLesson.fulfilled, (state) => {
      state.success = true;
    });
    builder.addCase(getLessonsByCourseId.fulfilled, (state, action) => {
      state.lessons = action.payload;
    });
  },
});

export const { resetSuccess } = LessonsSlice.actions;
export default LessonsSlice.reducer;
