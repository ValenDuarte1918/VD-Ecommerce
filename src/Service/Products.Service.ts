import { Products } from "../interface"

export const getProducts = async ():Promise<Products[]> => {
    try {
      const response = await fetch('http://localhost:3000/products')   // npx json-server db.json
      if (response.ok){
        const data = await response.json()
        return data
      }else {
        throw new Error('Error fetching data')
      }
    } catch (error) {
        throw new Error('Network error')
    }
  }