import type { CartAction, CartState } from '../types/carts';

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.find(i => i.id === action.item.id);
            if (existing) {
                return {
                    ...state,
                    items: state.items.map(i => {
                        if (i.id === action.item.id) {
                            return { ...i, quantity: i.quantity + action.item.quantity };
                        }
                        return i;
                    }),
                };
            }
            return { ...state, items: [...state.items, action.item] };
        }
        case 'REMOVE_ITEM': {
            const itemToRemove = state.items.find(i => i.id === action.id);
            if (itemToRemove && itemToRemove.quantity > 1) {
                return {
                    ...state,
                    items: state.items.map(i => {
                        if (i.id === action.id) {
                            return { ...i, quantity: i.quantity - 1 };
                        }
                        return i;
                    }),
                };
            }
            return { ...state, items: state.items.filter(i => i.id !== action.id) };
        }
        case 'CLEAR_CART':
            return { ...state, items: [] };
        default:
            return state;
    }
};