import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { forwardRef } from "react";

const CartOverview = forwardRef((props, ref) => {
  const totalPizzas = useSelector(getTotalCartQuantity); //our cartSlice name is cart so state.cart and .cart another means cart array inside initialState

  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-9 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-8">
        <span>{totalPizzas} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart" ref={ref}>
        Open cart &rarr;
      </Link>
    </div>
  );
});

CartOverview.displayName = "CartOverview";

export default CartOverview;
