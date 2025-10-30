import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const loadCartFromStorage = () => {
    const cartData = Cookies.get("cart");
    return cartData ? JSON.parse(cartData) : [];
};

const initialState = {
    cart: loadCartFromStorage()
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            action.payload.forEach((newItem) => {
                const existingItem = state.cart.find(item => item._id === newItem._id);

                if (existingItem) {
                    // If the item already exists, update its quantity immutably
                    existingItem.quantity = newItem.quantity;
                } else {
                    // Add new item immutably
                    state.cart = [...state.cart, { ...newItem }];
                }
            });

            Cookies.set('cart', JSON.stringify(state.cart), { expires: 7 });
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            if (typeof window !== "undefined") {
                Cookies.set("cart", JSON.stringify(state.cart), { expires: 14, path: '/' });
            }
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
