import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const ShopPage = ({ setCurrentProduct, setPrice }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                const related = data.filter((product) => 
                product.category === "jewelery" || product.category === "electronics");
                setProducts(related);
            })
            .catch((error) => {setError("This error occurred: " + error)})
            .finally(() => {setLoading(false)});
    }, []);

    if (error) return <p>A network error was encountered...</p>;

    if (loading) return <p className="loading">Loading...</p>;

    function sendProduct(image, title, description, price) {
        const product = 
        JSON.stringify({ 
            image: image, 
            title: title, 
            description: description, 
            price: price 
        });
        
        setCurrentProduct(product);
    
        setPrice(price);
    }

    return (
        <div className="shop-page">
            <h2>Products</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={uuidv4()} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>£{product.price}</p>
                        <Link to="/quantity">
                            <button onClick={
                                () => {sendProduct(
                                        product.image, product.title, product.description, product.price
                                        )}}>
                                        Add to cart
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;