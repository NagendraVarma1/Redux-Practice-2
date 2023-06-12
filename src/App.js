import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./Stote/cartItem-action";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.showCart.cartOpen);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.showCart.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartItems.changed) {
      dispatch(sendCartData(cartItems));
    }
  }, [cartItems, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
