import type { CartState } from './CartState';
import type { CartItem } from './CartItem';

export type CartContextType = {
    state: CartState;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
};