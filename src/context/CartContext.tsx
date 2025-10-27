import { createContext } from 'react';
import type { CartContextType, CartItem } from "../types/Carts";

export const CartContext = createContext<CartContextType | undefined>(undefined);

function addToCart(item: CartItem, cartContext: CartContextType | undefined) {
    if (cartContext) {
        cartContext.addItem(item);
    } else {
        console.error("CartContext is undefined. Cannot add item to cart.");
    }
}

export { addToCart };