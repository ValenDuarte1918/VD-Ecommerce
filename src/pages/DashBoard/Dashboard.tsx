import { useNavigate } from "react-router-dom"
import styles from "./Dashboard.module.css"
import { useEffect, useState } from "react"

const Dashboard = () => {

    const [products, setProducts] = useState({
        amiiboSeries: "",
        character: "",
        gameSeries: "",
        head: "",
        image: "",
        name: "",
        releseDate: "",
        tail: "",
        type: "",
        price: 0
    })


    const navigate = useNavigate()

    useEffect(() => {
        const userLogin = localStorage.getItem("userLogin")
        if (!userLogin) {
            navigate("/login")
        }
    }
    , [navigate])

    const handleLogout = () => {
        localStorage.removeItem("userLogin")
        navigate("/login")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(products)
    }

  return (
    <div className={styles.container}>
        <div>
            <h1>Dashboard</h1>
            <button onClick= {handleLogout} >Logout</button>
        </div>
        <form onSubmit={handleSubmit} >
            <div className={styles.formControlLogin}>
                <label htmlFor="amiiboSeries">Amiibo Series </label>
                <input type="text" 
                id="amiiboSeries" 
                name="amiiboSeries"
                value={products.amiiboSeries}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="character">character</label>
                <input type="text" 
                id="character" 
                name="character"
                value={products.character}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="gameSeries">gameSeries</label>
                <input type="text" 
                id="gameSeries" 
                name="gameSeries"
                value={products.gameSeries}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="head">head</label>
                <input type="text" 
                id="head" 
                name="head"
                value={products.head}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input type="url" 
                id="image" 
                name="image"
                value={products.image}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="name">Name</label>
                <input type="text" 
                id="name" 
                name="name"
                value={products.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="releseDate">relese</label>
                <input type="date" 
                id="releseDate" 
                name="releseDate"
                value={products.releseDate}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="tail">tail</label>
                <input type="text" 
                id="tail" 
                name="tail"
                value={products.tail}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="type">type</label>
                <input type="text" 
                id="type" 
                name="type"
                value={products.type}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="price">Price</label>
                <input type="number" 
                id="price" 
                name="price"
                value={products.price}
                onChange={handleChange}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <button type="submit">Add product</button>
            </div>
        </form>
    </div>
  )
}
export default Dashboard
