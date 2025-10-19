import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-green-300 px-4 py-3 uppercase sm:px-8">
      <Link to="/" className="tracking-widest">
        5 Min React Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
