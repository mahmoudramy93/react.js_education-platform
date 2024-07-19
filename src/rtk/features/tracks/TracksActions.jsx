import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/tracks";
// const api = "http://54.80.242.237:3000/tracks";

export const addTrack = createAsyncThunk(
  "tracks/addTrack",
  async (trackData) => {
    try {
      const res = await axios.post(`${api}`, trackData);
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

export const getTracks = createAsyncThunk(
  "tracks/getTracks",
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
