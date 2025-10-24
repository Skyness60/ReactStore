import { getProducts } from "../api/product";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import type { JSX } from "react";
import "./ProductCard.css"

export function ProductCard() : JSX.Element
{
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        getProducts()
            .then((data) => {
                if (mounted) {
                    setProducts(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (mounted) {
                    setError(String(err) || "Failed to load products");
                    setLoading(false);
                }
            });
        return () => { mounted = false; };
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner" role="status" aria-label="Chargement des produits"></div>
            </div>
        );
    }

    if (error) {
        return <div className="error-container">Erreur: {error}</div>;
    }

    return (
        <div className="product-card-container">
            {products.map((product: Omit<Product, 'description' | 'category'>) => {
                return (
                    <div 
                        key={product.id} 
                        className="product-card" 
                        aria-label={product.title}
                    >
                        <div className="product-media">
                            <img 
                                className="product-image" 
                                src={product.image} 
                                alt={product.title}
                                loading="lazy"
                            />
                        </div>

                        <div className="product-content">
                            <h2 className="product-title">{product.title}</h2>

                            <div className="product-price" aria-label={`Prix: ${product.price} dollars`}>
                                ${product.price.toFixed(2)}
                            </div>

                            <button 
                                className="btn-buy" 
                                aria-label={`Acheter ${product.title}`}
                            >
                                <span>Acheter</span>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}