import { useReducer, useEffect } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";
import type { CartState } from "../types/carts";

const initialState: CartState = {
  items: [],
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    // Charge le panier depuis localStorage au démarrage
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : init;
  });

  useEffect(() => {
    // Sauvegarde le panier à chaque modification
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addItem = (item: any) => dispatch({ type: "ADD_ITEM", item });
  const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}