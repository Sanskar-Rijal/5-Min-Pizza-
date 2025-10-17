import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loading from './Loading';

function AppLayout() {
  const navigation = useNavigation();
  //console.log(navigation);
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-green-100">
      {isLoading && <Loading />}

      <Header />
      <main className="max-w-3xl overflow-scroll">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
