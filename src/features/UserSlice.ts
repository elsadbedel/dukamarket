import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import data from "../fakeApi/data";

const initialState: IUser = {
    users: [],
    cart: [],
    wishlist: [],
    products: [...data]
}
const userSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        // Shopping section actions
        addCart: (state, action: PayloadAction<Product>) => {
            const sameId = state.cart.findIndex(item => item.id === action.payload.id);

            if (sameId >= 0) {
                state.cart[sameId].quantity += 1;
                message.warn('Same product added again +1');
            } else {
                state.cart.push(action.payload);
                message.success('Product added');
            }
        },
        deleteCart: (state, action: PayloadAction<Product>) => {
            const filteredState = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = filteredState;
            message.success('Product deleted');
        },
        incrementProduct: (state, action: PayloadAction<Product>) => {
            const sameId = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart[sameId].quantity += 1;
            message.info('Product added again +1');
        },
        decrementProduct: (state, action: PayloadAction<Product>) => {
            const sameId = state.cart.findIndex(item => item.id === action.payload.id);
            if (state.cart[sameId].quantity > 0) {
                state.cart[sameId].quantity -= 1;
                message.info('Product decreased -1');
            } else {
                message.warning('Product not found');
            }
        },

        // Favorite section actions
        addWish: (state, action: PayloadAction<Product>) => {

            const sameId = state.products.findIndex(item => item.id === action.payload.id);
            state.products[sameId].wish = true;
            state.wishlist.push(action.payload);
            message.success('Added to Favorite');
        },
        deleteWish: (state, action: PayloadAction<Product>) => {
            const sameId = state.products.findIndex(item => item.id === action.payload.id);
            state.products[sameId].wish = false;
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
            message.success('Deleted from Favorite');
        },

        // login section actions
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        onSite: (state, action: PayloadAction<User>) => {
            const userIndex = state.users.findIndex(user => user.username === action.payload.username && user.password === action.payload.password);
            state.users[userIndex].onsite = true;
            window.localStorage.setItem("onsite", `${userIndex}`);
            message.success('Logged Success');
        },
        logOut: (state, action: PayloadAction<User>) => {
            const userIndex = state.users.findIndex(user => user.username === action.payload.username && user.password === action.payload.password);
            state.users[userIndex].onsite = false;
        },
    }
})
export default userSlice.reducer;
export const { addCart, deleteCart, incrementProduct, decrementProduct, addWish, deleteWish, addUser, onSite, logOut } = userSlice.actions;

// Types & Interfaces
export interface Product {
    id: string;
    title: string;
    type: string;
    image: string;
    description: string;
    price: number;
    discountedPrice: number;
    quantity: number;
    sold: number,
    available: number,
    wish: boolean
}
export interface IProduct {
    products: Product[]
}
export type User = {
    username: string;
    password: string;
    onsite: boolean;
}
export interface IUser {
    users: User[],
    cart: Product[],
    wishlist: Product[],
    products: Product[]
}


