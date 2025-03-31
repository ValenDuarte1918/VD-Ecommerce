import { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'
import { Navbar } from '../../components/Ui/NavBar'

const Login = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (userData.email.trim() == "" || userData.password.trim() == "") {
            toast.error("Por favor, completa todos los campos.")
            return;
        }
        localStorage.setItem(
            "userLogin",
            JSON.stringify(userData.email)
        )
        navigate("/dashboard")
    }


  return (
    <> 
    <Navbar/>
    <div className= {styles.containerLogin}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
        {}
        <div className= {styles.formControlLogin}>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name='email'
            id="email" 
            value= {userData.email}
            onChange={handleChange}/>
        </div>
        <div>
        {}
        </div>
        <div className= {styles.formControlLogin}>
        <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name='password'
            id="password" 
            value= {userData.password}
            onChange={handleChange}
        />
        </div>
        <div className={styles.formControlLogin}>
            <button type="submit">Login</button>
        </div>
        </form>
        <Toaster richColors visibleToasts={1}/>
    </div>
    </>
  )
}

export default Login