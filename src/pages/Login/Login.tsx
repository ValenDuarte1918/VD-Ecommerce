import { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'
import { Navbar } from '../../components/Ui/NavBar'

/**
 * Componente de Login.
 * Este componente permite a los usuarios iniciar sesión ingresando su correo electrónico y contraseña.
 * @component
 */
const Login = () => {

    const navigate = useNavigate()

    /**
     * Estado para almacenar los datos del usuario.
     * @typedef {Object} UserData
     * @property {string} email - Correo electrónico del usuario.
     * @property {string} password - Contraseña del usuario.
     */
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    /**
     * Maneja los cambios en los campos del formulario.
     * Actualiza el estado `userData` con los valores ingresados por el usuario.
     * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio en el input.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    /**
     * Maneja el envío del formulario.
     * Valida los campos y guarda el correo electrónico en el localStorage.
     * Redirige al usuario al dashboard si los datos son válidos.
     * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
     */
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