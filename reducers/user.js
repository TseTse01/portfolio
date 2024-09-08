import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isClicked: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isClicked: (state, action) => {
      state.value.isClicked = action.payload;
      //   console.log(action.payload);
    },
  },
});

export const { isClicked } = userSlice.actions;
export default userSlice.reducer;
