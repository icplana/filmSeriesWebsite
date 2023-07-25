import { useContext } from "react"
import { signInEmail, signInWithGoogle } from "../firebase/firebase"
import { useForm } from "../hooks/useForm"
import { AuthContext } from "../contexts/auth/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export const LoginCard = () => {
    const { onInputChange, email, password } = useForm({ email: '', password: '' })
    const { login } = useContext( AuthContext )
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        const user = await signInEmail( email, password )
        console.log(user)
        if ( user.auth ){
            login( email, password )
            navigate('/')
        } 
    }

    const onGoogleLogin = async (e) => {
        e.preventDefault()
        const user = await signInWithGoogle()
       
        if ( user.auth ){
            login( email, password )
            navigate('/')
        } 

    }

  return (
    <div className="bg-stone-200">
        <h2>Login</h2>

        <form onSubmit={ onSubmit }>
            <div>
                <label>Correo</label>
                <input 
                    type="email"
                    name="email"
                    value={ email }
                    onInput={ onInputChange }
                />
            </div>

            <div>
                <label>Contraseña</label>
                <input 
                    type="password"
                    name="password"
                    value={ password }
                    onInput={ onInputChange }
                />
            </div>

            <input type="submit" value="Login" />
        </form>


        <button onClick={ onGoogleLogin }>Login with Google</button>

        <Link to="/register" >Register</Link>

    </div>
  )
}
