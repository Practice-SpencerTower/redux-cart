import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { title, price, description } = props;

    const addToCartHandler = () => {
        console.log({ title, price, description });
        // may not work
        dispatch(cartActions.addToCart({ title, price, description }));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button
                        value={{ title, price, description }}
                        onClick={addToCartHandler}
                    >
                        Add to Cart
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
