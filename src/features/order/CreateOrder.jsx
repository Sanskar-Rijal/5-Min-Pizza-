import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart; //we want to send the cart to the form so that we can get from action

  //showing loading when form is being submitted
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  //using another custom hook to get errors from action
  const formErrors = useActionData();
  console.log(formErrors);

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* we can send any data to form field without asking the user , by using input field */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="inline-block rounded-full bg-green-400 px-2 py-2 font-semibold tracking-wide uppercase transition-colors duration-300 text-shadow-stone-800 hover:cursor-pointer hover:bg-green-300 focus:bg-red-300 focus:ring focus:ring-amber-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Ordering.....' : 'Order now'}
          </button>
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
    priority: data.priority === 'on',
  };

  console.log(order);

  //checking whether the phn no is valid or not
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (Object.keys(errors).length > 0) {
    return errors; //we can get accesss to this in  CreateOrder component
    // because in app.jsx we have passed this function as action to it
  }

  const newOrder = await createOrder(order);
  //now we want to redirect the user to order/id page

  return redirect(`/order/${newOrder.id}`); //we can't use useNavigate hook here,
  //it can be used only in components
}

export default CreateOrder;
