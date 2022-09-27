import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const { title, quantity, total, price, id } = props.item;
    console.log('ITEM in CART', title, total, price);

    const removeItemHandler = () => {
        dispatch(cartActions.removeFromCart(id));
    };

    const addItemHandler = () => {
        console.log('TOTAL', total);
        dispatch(
            cartActions.addToCart({
                id,
                title,
                quantity,
                total,
                price,
            })
        );
    };

    return (
        <li className={classes.item}>
            <header>
                <p>{title}</p>
                <div className={classes.price}>
                    ${Number(total)}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
