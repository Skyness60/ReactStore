import type { CartItem } from './CartItem';

export type CartAction =
    | { type: 'ADD_ITEM'; item: CartItem }
    | { type: 'REMOVE_ITEM'; id: string }
    | { type: 'CLEAR_CART' };