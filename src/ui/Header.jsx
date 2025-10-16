import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">5 Min React Pizza</Link>
      <SearchOrder />
      <p>Hello world </p>
    </header>
  );
}

export default Header;
