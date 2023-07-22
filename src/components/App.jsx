import '../main.css'
import reactLogo from '../assets/react.svg'
import { useState } from 'react';
import { HashRouter , Routes, Route, Link } from 'react-router-dom'
import CartIcon from "../assets/cart.png";
import HomePage from './HomePage'
import ShopPage from './ShopPage';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
    <HashRouter basename="/">
      <div className="menu-bar">
        <h1>The One Shop</h1>
        <Link to="/">
          <button type="button" className="home">Home</button>
        </Link>
        <Link to="/shop-page">
          <button type="button" className="browse">Browse Shop</button>
        </Link>
        <button type="button" className="cart-icon">
          <img src={CartIcon} />
          {cart.length}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-page" element={<ShopPage />} />
      </Routes>
    </HashRouter>
    <footer>Developed by Fahim Ahmed <img src={reactLogo} /></footer>
    </>
  )
}

export default App
