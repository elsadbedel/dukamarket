import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModal {
  showWishList: boolean;
  showAddToCart: boolean;
  showLogin: boolean;
}

export const initialState: IModal = {
  showWishList: false,
  showAddToCart: false,
  showLogin: false
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showWishList: (state, action: PayloadAction<boolean>) => {
      state.showWishList = action.payload;
    },
    showAddToCart: (state, action: PayloadAction<boolean>) => {
      state.showAddToCart = action.payload;
    },
    showLogin: (state, action: PayloadAction<boolean>) => {
      state.showLogin = action.payload;
    }
  }
});

export default modalSlice.reducer;
export const { showAddToCart, showWishList, showLogin } = modalSlice.actions;
