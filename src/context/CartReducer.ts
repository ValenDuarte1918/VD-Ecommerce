import { CartProduct } from "../interface";

export interface CartState {
    cartItems: CartProduct[];

}

export const inicialState:CartState = {
    cartItems: [],
}

export interface CartAction {
    type: "ADD_TO_CART" | "REMOVE_FROM_CART";
    payload: CartProduct;
}

export const cartReducer = (state:CartState, action:CartAction):CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':{
            const {id} = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
                };
            }
        }
        case 'REMOVE_FROM_CART': {
            const { id: removeItemID} = action.payload;
            const itemToRemove = state.cartItems.find(item => item.id === removeItemID);
            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(item =>
                            item.id === removeItemID ? { ...item, quantity: item.quantity - 1 } : item
                        )
                    };
                } else {
                    return {
                        ...state,
                        cartItems: state.cartItems.filter(item => item.id !== removeItemID)
                    };
                }
            }
            return state; 
        }
        default:
            return state;
    }
}