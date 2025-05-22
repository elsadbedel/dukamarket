import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import ModalSlice from "../features/ModalSlice";
import UserSlice from "../features/UserSlice";

const store = configureStore({
  reducer: {
    modals: ModalSlice,
    users: UserSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); //Usedispatch hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //UseSelector hook
