import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const QuantityPage = ({ product, price, cart, setCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [productPrice, setPrice] = useState(price);

    const currentProduct = JSON.parse(product);
    const singlePrice = price;

    useEffect(() => {
        setPrice(singlePrice * quantity);
    }, [product, quantity, singlePrice]);

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function addToCart() {
        const order = [{
            image: currentProduct.image,
            title: currentProduct.title,
            description: currentProduct.description,
            price: productPrice,
            quantity: quantity
        }]

        setCart(cart.concat(order));
    }

    return (
        <>
            <div className="quantity-page">
                <h2>Quantity</h2>
                <div className="single-card">
                    <img src={currentProduct.image} alt={currentProduct.title} />
                    <h4>{currentProduct.title}</h4>
                    <p>{currentProduct.description}</p>
                    <p>£{price}</p>
                </div>
                <div className="handle-inputs">
                    <button onClick={decrementQuantity} className="minus">-</button>
                    <input 
                        type="number" 
                        maxLength={4} 
                        value={quantity} 
                        onChange={event => setQuantity(event.target.value)} 
                    />
                    <button onClick={incrementQuantity} className="plus">+</button>
                </div>
                <div className="price">
                    Total price: £ {productPrice.toFixed(2)}
                </div>
                <Link to="/shop-page">
                    <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
                </Link>
            </div>
        </>
    );
};

export default QuantityPage;