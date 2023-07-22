import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to The One Shop</h1>
            <p>We are definitely not One Stop</p>
            <p>We are a new store with many different products</p>
            <p>Check out our brand new products</p>
            <Link to="shop-page">
                <button type="button" className="shop">Shop with us now</button>
            </Link>
        </div>
    );
};

export default HomePage;