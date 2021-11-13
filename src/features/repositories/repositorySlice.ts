import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repositories: [],
  loading: false,
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default repositorySlice.reducer;
