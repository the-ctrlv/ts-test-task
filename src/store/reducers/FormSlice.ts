/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IFormState } from "../../types/Form";

const initialState: IFormState = {
  option: "",
  note: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    dataUpdate: (state: IFormState, action: { payload: IFormState }) => {
      console.log(state);
      state.option = action.payload.option;
      state.note = action.payload.note;
    },
  },
});

export default formSlice.reducer;
