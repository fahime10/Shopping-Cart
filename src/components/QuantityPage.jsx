import { useState, useEffect } from "react"

const QuantityPage = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [currentProduct, setCurrentProduct] = useState(props.product);
    const [price, setPrice] = useState(props.price);

    const singlePrice = props.price;

    useEffect(() => {
        setPrice(singlePrice * quantity);
    }, [quantity, singlePrice]);

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <div className="quantity-page">
                <h2>Quantity</h2>
                {currentProduct}
                <div className="handle-inputs">
                    <button onClick={decrementQuantity}>-</button>
                    <input type="number" maxLength={4} value={quantity} />
                    <button onClick={incrementQuantity}>+</button>
                </div>
                <div className="price">
                    Total price: £ {price}
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </>
    );
};

export default QuantityPage;