import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      {/* <Link to="/menu">&larr; Back to menu</Link> */}
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-3 px-2 py-3 text-xl font-medium">
        Your cart is still empty. Start adding some pizzas{" "}
      </p>
    </div>
  );
}

export default EmptyCart;
