import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../Stote/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()

  const cartOpenHandler = () => {
    dispatch(cartActions.cartHandler())
  }
  return (
    <button className={classes.button} onClick={cartOpenHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
