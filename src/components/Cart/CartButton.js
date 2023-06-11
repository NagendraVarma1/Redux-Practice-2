import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../Stote/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.cartItems.totalQuantity)

  const cartOpenHandler = () => {
    dispatch(cartActions.cartHandler())
  }
  return (
    <button className={classes.button} onClick={cartOpenHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
