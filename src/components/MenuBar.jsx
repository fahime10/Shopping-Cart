import { useState } from "react";
import CartIcon from "../assets/cart.png";

const MenuBar = () => {
    const [items, useItems] = useState(null);

    return (
        <div className="menu-bar">
            <h1>The One Shop</h1>
            <button type="button" className="home">Home</button>
            <button type="button" className="browse">Browse Shop</button>
            <button type="button" className="cart-icon">
                <img src={CartIcon} />
                {items}
            </button>
        </div>
    );
};

export default MenuBar;