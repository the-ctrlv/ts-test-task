import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formSlice from "./reducers/FormSlice";

const rootReducer = combineReducers({
  formData: formSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];
