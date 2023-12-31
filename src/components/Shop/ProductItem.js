import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartItemActions } from '../../Stote/cartItem-slice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch()

  const addtoCartHandler = () => {
    dispatch(cartItemActions.addItemtoCart({
      id,  //when the key and value names are same we can write that name for one time is enough
      title, //it is equal to (title: title, id: id, price: price)
      price,
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
