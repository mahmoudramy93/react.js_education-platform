import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchVisible: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isSearchVisible = !state.isSearchVisible;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
