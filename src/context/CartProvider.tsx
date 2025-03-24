import {  useReducer, FC, ReactNode } from "react";
import { cartReducer, inicialState } from "./CartReducer";
import { CartContext } from "./CartContext";

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, inicialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>


    )



}