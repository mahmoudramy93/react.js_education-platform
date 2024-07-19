import { createSlice } from "@reduxjs/toolkit";
import { addTrack, getTracks } from "./TracksActions";

const initialState = {
  tracks: [],
};

const TracksSlice = createSlice({
  name: "tracks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addTrack.fulfilled, (state, action) => {
      state.tracks.push(action.payload);
    });
    builder.addCase(getTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
    });
  },
});

export default TracksSlice.reducer;
