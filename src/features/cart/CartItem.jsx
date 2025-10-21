import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../user/Button";
import { decreaseItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  function handleRemoveItem() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-7">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleRemoveItem}>
          Remove
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
