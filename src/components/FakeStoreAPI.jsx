import { useState, useEffect } from "react";

const FakeStoreAPI = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignored = false;

        if (!ignored) {
            fetch("https://fakestoreapi.com/products?limit=20", { mode: "cors"})
            .then((response) => { return response.json() })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        }

        return () => {
            ignored = true;
        }
    }, []);

    return { data, error, loading };
}

export default FakeStoreAPI;