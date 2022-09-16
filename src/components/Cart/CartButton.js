import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartVisible = useSelector((state) => state.cartVisible);
    const numItems = useSelector((state) => state.numItems);

    const toggleCartHandler = () => {
        // if cart shown, hide cart and vice-versa
        if (!cartVisible) {
            dispatch(cartActions.showCart());
        } else {
            dispatch(cartActions.hideCart());
        }
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{numItems}</span>
        </button>
    );
};

export default CartButton;
