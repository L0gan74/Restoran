import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
};

const filterSlice = createSlice({
  name: "filer",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log('action setCategoryId', action);
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
