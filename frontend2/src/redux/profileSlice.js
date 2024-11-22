import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userProfile: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess: (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
    },
    fetchProfileError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProfileStart, fetchProfileSuccess, fetchProfileError } = profileSlice.actions;
export default profileSlice.reducer;
