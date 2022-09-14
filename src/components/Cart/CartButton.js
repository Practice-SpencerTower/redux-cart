import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartVisible = useSelector((state) => state.cartVisible);
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
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
