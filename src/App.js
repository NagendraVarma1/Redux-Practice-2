import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { cartActions } from "./Stote/cart-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.showCart.cartOpen);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.showCart.notification);

  useEffect(() => {
      const sendCartData = async () => {
        dispatch(
          cartActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "sending Cart Data",
          })
        );
        const response = await fetch(
          "https://redux-practice-2-fb2d4-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cartItems),
          }
        );
        if (!response.ok) {
          throw new Error("sending cart data failed");
        }
        dispatch(
          cartActions.showNotification({
            status: "success",
            title: "Success...",
            message: "sent Cart Data successfully",
          })
        );
      };

      if(isInitial) {
        isInitial = false;
        return;
      }

      sendCartData().catch((error) => {
        dispatch(
          cartActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Sending Cart Data failed",
          })
        );
      });
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
