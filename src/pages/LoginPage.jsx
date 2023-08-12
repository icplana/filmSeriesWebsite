import { useContext } from "react"
import { getFavoritesDB, signInEmail, signInWithGoogle } from "../Firebase/firebase"
import { useForm } from "../hooks/useForm"
import { AuthContext } from "../contexts/auth/AuthContext"
import { Link, useNavigate } from "react-router-dom"



export const LoginPage = () => {

    const { onInputChange, email, password } = useForm({ email: '', password: '' })
    const { login } = useContext( AuthContext )
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
    <div className="mt-2 sm:mt-3 text-primary w-screen sm:max-w-lg px-5">
        <h2 className="text-4xl font-light mb-3 text-white2">Login</h2>

        <form onSubmit={ onSubmit } className="mb-4 w-full">
            <div className=" mb-3">
                <label className="block font-semibold text-white2">Correo</label>
                <input 
                    type="email"
                    name="email"
                    value={ email }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 w-full"
                    placeholder="email@email.com"
                />
            </div>

            <div className="mb-3">
                <label className="block font-semibold text-white2">Contraseña</label>
                <input 
                    type="password"
                    name="password"
                    value={ password }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 w-full"
                    placeholder="******"
                />
            </div>

            <input className="bg-white rounded-md px-3 py-2 font-bold mb-2" type="submit" value="Login" />
        </form>


        <button className="bg-white rounded-md px-3 py-2 font-bold mb-4"  onClick={ onGoogleLogin }>Login with Google</button>
        

        <p className="text-white2 mb-1">Don't have an account?</p>
        <Link className="bg-white rounded-md px-3 py-2 font-bold mb-2 block w-fit" to="/register" >Register</Link>


    </div>
  )
}
