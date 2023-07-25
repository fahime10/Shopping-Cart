import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        
        cart.forEach((product) => {
            total += product.price;
        });

        setTotalPrice(total);

    }, [cart]);

    function proceedToCheckout() {
        setCart([]);
    }

    function removeItem(index) {
        const leftSlice = cart.slice(0, index);
        const rightSlice = cart.slice(index + 1);
        const newCart = leftSlice.concat(rightSlice);

        setCart(newCart);
    }

    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <h1>The cart is currently empty</h1>
            </div>
        );
    } else {
        return (
            <div className="cart-page">
                <h1>Your cart</h1>
                {(cart).map((product, index) => (
                    <div key={index} className="single-card">
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title} />
                        <p>{product.description}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: £ {product.price}</p>
                        <button className="remove" onClick={() => removeItem(index)}>Remove item</button>
                    </div>
                ))}
                <h2>Total price: £ {totalPrice}</h2>
                <Link to="/">
                    <button className="checkout" onClick={proceedToCheckout}>Proceed to checkout</button>
                </Link>
            </div>
        );
    }
};

export default CartPage;