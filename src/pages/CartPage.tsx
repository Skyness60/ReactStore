import "./CartPage.css";
import { useCart } from "../hooks/useCart";

export default function CartPage() {
  const { state, removeItem, clearCart } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-container">
      <h2 className="cart-title">Mon panier</h2>
      {state.items.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <>
          <ul className="cart-list">
            {state.items.map(item => (
              <li className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-quantity">
                    Quantité : {item.quantity}
                  </span>
                  <span className="cart-item-price">
                    Prix unitaire : ${item.price.toFixed(2)}
                  </span>
                  <span className="cart-item-total">
                    Total : ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Retirer
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total-section">
            Total du panier : ${total.toFixed(2)}
            <button className="cart-clear-btn" onClick={clearCart}>
              Vider le panier
            </button>
          </div>
        </>
      )}
    </main>
  );
}