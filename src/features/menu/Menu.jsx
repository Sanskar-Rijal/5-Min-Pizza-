import { useLoaderData, useOutletContext } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  const { cartRef } = useOutletContext();

  return (
    <ul className="divide-y divide-stone-300 px-3 py-3">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} cartRef={cartRef} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
