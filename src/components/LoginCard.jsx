import { useContext } from "react"
import { getFavoritesDB, signInEmail, signInWithGoogle } from "../Firebase/firebase"
import { useForm } from "../hooks/useForm"
import { AuthContext } from "../contexts/auth/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export const LoginCard = () => {
    const { onInputChange, email, password } = useForm({ email: '', password: '' })
    const { login, state } = useContext( AuthContext )
    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()

        const user = await signInEmail( email, password )
        
        if ( user.auth ){
            const favList = await getFavoritesDB( user.uid )
            login( user.email, user.uid, favList )
            navigate('/')
        } 
    }

    const onGoogleLogin = async (e) => {
        e.preventDefault()
        const user = await signInWithGoogle()
       
        if ( user.auth ){
            const favList = await getFavoritesDB( user.uid )
            login( user.email, user.uid, favList )
            navigate('/')
        } 

    }

  return (
    <div>
        {
            state.logged
            ? <p>Already logged in.</p>
            : <div className="bg-stone-200">
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
        }
        
    </div>
  )
}
