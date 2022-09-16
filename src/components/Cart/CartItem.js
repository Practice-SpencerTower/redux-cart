import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const { title, quantity, total, price } = props.item;
    console.log('ITEM in CART', title, total, price);

    const removeItemHandler = () => {
        dispatch(cartActions.removeFromCart({ title, quantity, total, price }));
    };

    const addItemHandler = () => {
        console.log('TOTAL', total);
        dispatch(
            cartActions.addToCart({
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
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${Number(total)}
                    <span className={classes.itemprice}>
                        {/* (${price.toFixed(2)}/item) */}
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
