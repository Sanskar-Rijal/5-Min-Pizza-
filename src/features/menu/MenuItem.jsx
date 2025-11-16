import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../user/Button";
import { addItem, getCurrentQuantitybyId } from "../cart/cartSlice";
import { useRef } from "react";
import { flyToCart } from "../../utils/flyToCart";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza, cartRef }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  // const currentQuantity = useSelector(
  //   (state) =>
  //     state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0,
  // );

  const currentQuantity = useSelector(getCurrentQuantitybyId(id));

  //if element is in cart currentQuantity will be greater than 0 so we calculated currentQuantity
  const isInCart = currentQuantity > 0;

  function handleAddtoCart() {
    const pizzaItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(pizzaItem));

    // Trigger fly animation
    if (imageRef.current && cartRef?.current) {
      flyToCart(imageRef.current, cartRef.current);
    }
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        ref={imageRef}
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-80 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">Rs {unitPrice}</p>
          ) : (
            <p className="text-sm font-bold text-red-400 uppercase">Sold out</p>
          )}

          {/* if quantity of any pizza is greater than 0 then it is in the cart show delete button */}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-7">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddtoCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
