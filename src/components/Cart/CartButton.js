import classes from './CartButton.module.css';

const CartButton = (props) => {
    const toggleCartHandler = () => {
      // if cart shown, hide cart and vice-versa
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
