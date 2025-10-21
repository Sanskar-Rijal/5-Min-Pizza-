import { useDispatch } from "react-redux";
import Button from "../user/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  console.log("Current Quantity in UpdateItemQuantity:", currentQuantity);

  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
