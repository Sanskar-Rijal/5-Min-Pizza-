import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../user/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  //const cart = fakeCart; //we want to send the cart to the form so that we can get from action

  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);

  //total price of pizza calculation
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  //showing loading when form is being submitted
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  //using another custom hook to get errors from action
  const formErrors = useActionData();
  console.log(formErrors);

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-2xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            defaultValue={username}
            className="input flex-grow"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="flex-grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 p-2 font-bold text-red-500">
                {"*" + formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="flex-grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-4 flex items-center space-x-4 sm:justify-center">
          <input
            className="h-6 w-6 accent-green-400 hover:cursor-pointer focus:ring focus:ring-green-400 focus:ring-offset-2 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div className="sm:flex sm:justify-center">
          {/* we can send any data to form field without asking the user , by using input field */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">
            {isSubmitting ? "Ordering....." : `Order now for $${totalPrice}`}
          </Button>
        </div>
      </Form>
      {/* when we submit the form, it will call the action function below, and will pass request as parameter */}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority,
  };

  console.log(order);

  //checking whether the phn no is valid or not
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors; //we can get accesss to this in  CreateOrder component
    // because in app.jsx we have passed this function as action to it
  }

  const newOrder = await createOrder(order);
  //now we want to redirect the user to order/id page

  //we want to clear cart afer creating a order
  //dispatch function works only in components not in action functions so we import store here
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`); //we can't use useNavigate hook here,
  //it can be used only in components
}

export default CreateOrder;
