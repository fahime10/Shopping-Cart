import { useState, useEffect } from "react";
import FakeStoreAPI from "./FakeStoreAPI";

const ShopPage = () => {
    // const { data, error, loading } = FakeStoreAPI();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=20")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => setError("This error occurred: " + error))
            .finally(() => setLoading(false));
    }, []);

    if (error) return <p>A network error was encountered...</p>;

    if (loading) return <p className="loading">Loading...</p>;

    return (
        <div className="shop-page">
            <h2>Products</h2>
            <div className="products-grid">
                {products.map((item) => {
                    <div key={item.id} className="product-card">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p>£{item.price}</p>
                        <button>Add to cart</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default ShopPage;