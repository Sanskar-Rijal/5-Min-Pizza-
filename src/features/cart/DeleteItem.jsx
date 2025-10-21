import { useDispatch } from "react-redux";
import Button from "../user/Button";
import { removeItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleRemoveItem() {
    dispatch(removeItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleRemoveItem}>
      Remove
    </Button>
  );
}

export default DeleteItem;
