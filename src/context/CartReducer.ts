export const inicialState = {
    cartItems: [],
}
export const cartReducer = (state, action) => {
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
                if (itemToRemove.quantity === 1) {
                    return {
                        ...state,
                        cartItems: state.cartItems.filter(item =>
                            item.id !== removeItemID)
                    };
                } else {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(item => item.id === removeItemID) ? 
                        {...itemToRemove, quantity: itemToRemove.quantity - 1} : item
                    };
                }
            }
        }
        default:
            return state;
    }
}