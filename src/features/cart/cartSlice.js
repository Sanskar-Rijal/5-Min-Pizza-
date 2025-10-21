import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
/*
Reference 
cart:[
{
pizzaId:12,
name:"Cheeze pizza",
quantity:2,
unitPrice:16,
totalPrice:32
}]
*/

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      //payLoad is the new item object
      console.log(action.payload);
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      //payload here is id of item to be removed
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload here is the id of item to be increased
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      //now we have the item here
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload here is the id of  item to be removed
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

//exporting the action creaters
export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce(
    (accumulator, pizza) => accumulator + pizza.quantity,
    0,
  );

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (accumulator, pizza) => accumulator + pizza.totalPrice,
    0,
  );

export const getCurrentQuantitybyId = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0;
