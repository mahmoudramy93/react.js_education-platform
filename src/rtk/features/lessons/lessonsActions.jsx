import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/lessons";

export const addLesson = createAsyncThunk(
  "lessons/addLesson",
  async (lessonData) => {
    try {
      const res = await axios.post(`${api}`, lessonData);
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

export const fetchLessons = createAsyncThunk(
  "lessons/fetchLessons",
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


export const getLessonsByCourseId = createAsyncThunk(
  "courses/getLessonsByCourseId",
  async (courseId) => {
    try {
      const res = await axios.get(`${api}/course/${courseId}`);
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

