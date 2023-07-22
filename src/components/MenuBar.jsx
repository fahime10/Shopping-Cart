import { useState } from "react";
import CartIcon from "../assets/cart.png";

const MenuBar = () => {
    const [items, useItems] = useState(0);

    return (
        <div className="menu-bar">
            <h1>Shopping Today</h1>
            <button type="button" className="browse">Browse Shop</button>
            <button type="button" className="cart-icon">
                <img src={CartIcon} />
                {items}
            </button>
        </div>
    );
};

export default MenuBar;