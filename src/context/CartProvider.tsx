import {  useReducer } from "react";
import { cartReducer, inicialState } from "./CartReducer";
import { CartContext } from "./CartContext";



export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, inicialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>


    )



}