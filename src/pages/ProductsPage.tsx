import { useEffect, useState } from "react";
import { getProducts } from "../api/product";
import type { Product } from "../types/Product";

export default function ProductPage()
{
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>
    {
        getProducts()
            .then((data) => setProducts(data))
            .catch(console.error)
            .finally(() => setLoading(false)); 
    }, []);

    if (loading)
        return <p>Chargement...</p>
    
    return (
        <main>
            <h2>
                Nos produits :
            </h2>
            {products.map((p) => (
                <div
                    key={p.id}
                >
                    <img
                        src={p.image}
                        alt={p.title}
                    />
                    <h3>{p.title}</h3>
                    <p>{p.price}</p>
                </div>
            ))}
        </main>
    );
}