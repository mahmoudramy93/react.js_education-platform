import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/courses";
// const api = "http://54.80.242.237:3000/courses";

export const addCourseToApi = createAsyncThunk(
  "courses/addCourse",
  async (courseData) => {
    try {
      const res = await axios.post(`${api}`, courseData);
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    }
  }
);

export const fetchCoursesData = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const res = await axios.get(`${api}`);
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId) => {
    try {
      await axios.delete(`${api}/${courseId}`);
      return courseId;
    } catch (error) {
      if (error.response) {
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    }
  }
);

export const fetchCourseById = createAsyncThunk(
  "courses/fetchCourseById",
  async (courseId) => {
    try {
      const res = await axios.get(`${api}/${courseId}`);
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    }
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCoruse",
  async ({ courseId, data }) => {
    try {
      const res = await axios.put(`${api}/${courseId}`, data);
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    }
  }
);

export const getCoursesByTrackId = createAsyncThunk(
  "courses/getCoursesByTrackId",
  async ({ trackId, track }) => {
    try {
      const res = await axios.get(`${api}/track/${trackId}`);
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    }
  }
);
