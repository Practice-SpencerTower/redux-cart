import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
    {
        id: 1,
        title: 'Test',
        price: 6,
        description: 'This is a first product - amazing!',
    },
    {
        id: 2,
        title: 'Test 2',
        price: 7,
        description: 'This is a second product - sublime!',
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_ITEMS.map((item) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
