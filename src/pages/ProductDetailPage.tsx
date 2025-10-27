import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useOneProduct } from "../hooks/useOneProduct";
import "./ProductDetailPage.css";


export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { product, loading } = useOneProduct(id);

  if (loading) return <div>Chargement...</div>;
  if (!product) return <div>Produit introuvable</div>;

  return (
    <main className="product-detail-container">
    <h2 className="product-detail-title">{product.title}</h2>
    <img className="product-detail-image" src={product.image} alt={product.title} />
    <p className="product-detail-description">{product.description}</p>
    <div className="product-detail-price">Prix: ${product.price}</div>
    <div className="product-detail-quantity">
        <label htmlFor="quantity">Quantité:</label>
        <input
        id="quantity"
        type="number"
        min={1}
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        />
    </div>
    <button
        className="product-detail-add-btn"
        onClick={() => addItem({ id: String(product.id), name: product.title, price: product.price, quantity, image: product.image })}>
        Ajouter au panier
    </button>
    </main>
  );
}