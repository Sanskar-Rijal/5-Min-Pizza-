import { createSlice } from "@reduxjs/toolkit";

const initiailState = {
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

const accountSlice = createSlice({
  name: "cart",
  initialState: initiailState,
  reducers: {
    addItem(state, action) {
      //payLoad is the new item object
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      //payload here is id of item to be removed
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload here is the id of item to be increased
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      //now we have the item here
      item.quantity++;
      item.toalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload here is the id of  item to be removed
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quanity--;
      item.totalPrice = item.quanity * item.unitPrice;
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
} = accountSlice.actions;

export default accountSlice.reducer;
