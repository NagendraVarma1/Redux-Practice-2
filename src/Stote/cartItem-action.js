import { cartActions } from "./cart-slice";
import { cartItemActions } from "./cartItem-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-practice-2-fb2d4-default-rtdb.firebaseio.com/cartItems.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartItemActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }))
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Fetching Cart Data failed",
        })
      );
    }
  };
};

export const sendCartData = (cartItems) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "sending Cart Data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-practice-2-fb2d4-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cartItems.items, totalQuantity: cartItems.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };
    try {
      await sendRequest();

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success...",
          message: "sent Cart Data successfully",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending Cart Data failed",
        })
      );
    }
  };
};
