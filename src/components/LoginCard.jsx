import { useContext } from "react"
import { getFavoritesDB, signInEmail, signInWithGoogle } from "../Firebase/firebase"
import { useForm } from "../hooks/useForm"
import { AuthContext } from "../contexts/auth/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export const LoginCard = ({ hideLoginCard }) => {
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
            hideLoginCard()
        } 
    }

    const onGoogleLogin = async (e) => {
        e.preventDefault()
        const user = await signInWithGoogle()
       
        if ( user.auth ){
            const favList = await getFavoritesDB( user.uid )
            login( user.email, user.uid, favList )
            navigate('/')
            hideLoginCard()
        } 

    }

  return (
    <div>
        {
            state.logged
            ? <p>Already logged in.</p>
            : <div className="rounded-md px-2 py-1">
            <h2 className="text-2xl mb-4">Login</h2>

            <form onSubmit={ onSubmit } className="text-lg font-light mb-6">
                <div className="mb-2">
                    <label className="block">Correo</label>
                    <input 
                        type="email"
                        name="email"
                        value={ email }
                        onInput={ onInputChange }
                        className="rounded border w-10/12"
                    />
                </div>

                <div className="mb-2">
                    <label className="block">Contraseña</label>
                    <input 
                        type="password"
                        name="password"
                        value={ password }
                        onInput={ onInputChange }
                        className="rounded border w-10/12"
                    />
                </div>

                <input type="submit" value="Login" className="text-md font-semibold border px-2 py-1 rounded-md mt-2 hover:bg-primaryWhite hover:opacity-80 cursor-pointer" />
            </form>


            <button className="text-md font-semibold border px-2 py-1 rounded-md mb-4 hover:bg-primaryWhite hover:opacity-80" onClick={ onGoogleLogin }>Login with Google</button>

            <Link className="font-semibold border px-2 py-1 rounded-md block w-fit hover:bg-primaryWhite hover:opacity-80" to="/register" >Register</Link>

        </div>
        }
        
    </div>
  )
}
