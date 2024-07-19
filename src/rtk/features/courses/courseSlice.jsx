import { createSlice } from "@reduxjs/toolkit";
import {
  addCourseToApi,
  deleteCourse,
  fetchCoursesData,
  fetchCourseById,
  updateCourse,
  getCoursesByTrackId,
} from "./coursesActions";

const initialState = {
  courses: [],
  frontendCourses: [],
  backendCourses: [],
  error: "",
  success: false,
  loading: false,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    resetSuccess: (state) => {
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    // add courses
    builder.addCase(addCourseToApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCourseToApi.fulfilled, (state, action) => {
      state.courses.push(action.payload);
      state.success = true;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(addCourseToApi.rejected, (state) => {
      state.error = "Failed to add course";
      state.loading = false;
    });
    // fetch courses
    builder.addCase(fetchCoursesData.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.error = "Failed to Fetch Data";
    });
    // fetch course by id
    builder.addCase(fetchCourseById.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
    // update course
    builder.addCase(updateCourse.fulfilled, (state) => {
      state.success = true;
    });
    // delete one course
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
      state.error = "Failed to Delete data";
    });
    // get courses by track id
    builder.addCase(getCoursesByTrackId.fulfilled, (state, action) => {
      const whichTrack = action.meta.arg.track;
      if (whichTrack.toLowerCase() === "frontend") {
        state.frontendCourses = action.payload;
      } else if (whichTrack.toLowerCase() === "backend") {
        state.backendCourses = action.payload;
      }
    });
  },
});

export const { resetSuccess } = courseSlice.actions;
export default courseSlice.reducer;
