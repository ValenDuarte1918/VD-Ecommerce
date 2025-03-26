import {CartContext} from "../context/CartContext"
import { useContext } from "react"
const useCartContext = () => {


    return useContext(CartContext)
}

export default useCartContext