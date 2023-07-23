import { useState, useEffect } from "react";

const ShopPage = () => {
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

    return (
        <div className="shop-page">
            <h2>Products</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>£{product.price}</p>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;