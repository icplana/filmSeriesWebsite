import { useContext, useRef } from "react"
import { Link, Navigate } from "react-router-dom"

import { AuthContext } from "../contexts/auth/AuthContext"
import { useForm } from "../hooks/useForm"
import { registerEmail } from "../Firebase/firebase"




export const RegisterPage = () => {
    
    const onRegister = async (e) => {
        e.preventDefault()
        let validation = true
        
        if ( nombre.length < 1 ) {
            validation = false
            nameAlert.current.classList.remove('d-none')
        }
        if ( password.length < 6 ) {
            validation = false
            passwordAlert.current.classList.remove('d-none')
        }
        if ( email.length < 1 || !email.includes('@')) {
            validation = false
            correoAlert.current.classList.remove('d-none')
        }


        if ( validation === true ) {
            
           const resp = await registerEmail( email, password )
           if ( resp.auth ) {
                succesAlert.current.classList.remove('d-none')
           }
           

            
        }
    }
    
    const handleInputChange = (e) => {
        onInputChange(e)
        
        if ( nombre.length > 1 ) nameAlert.current.classList.add('d-none')
        if ( password.length > 4 ) passwordAlert.current.classList.add('d-none')
        if ( email.length > 1 && email.includes('@')) correoAlert.current.classList.add('d-none')
    
    }

    const nameAlert = useRef()
    const correoAlert = useRef()
    const passwordAlert = useRef()
    const succesAlert = useRef()
   

    const { onInputChange, email, password, nombre } = useForm({ email: '', password: '' , nombre: '' })

    const { login } = useContext( AuthContext )

  return (
    <div className=''>
    <form className='' onSubmit={onRegister}>
      <h3 className=''>Registro de cuenta</h3>
      
        <div className=''>          
          <label htmlFor="nombre" className='form-label'>Nombre</label>
          <input 
            type="text" 
            id='nombre'
            name='nombre' 
            className='' 
            placeholder='Juan Hidalgo'
            value={ nombre }
            onInput={ onInputChange }            
          />
          <div className="" role="alert" ref={nameAlert}>
            Nombre no válido
          </div>
        </div>
      
        <div className=''>          
          <label htmlFor="email" className='form-label'>Correo</label>
          <input 
            type="email" 
            id='email'
            name='email' 
            className='form-control mb-2' 
            placeholder='correo@correo.com'
            value={ email }
            onInput={ handleInputChange }            
          />
           <div className="" role="alert" ref={correoAlert}>
            Email no válido
          </div>
        </div>


        <div className=''>
          <label className=''>Contraseña</label>
          <input 
            type="password" 
            className='' 
            placeholder='********'
            name='password'
            value={ password }
            onInput={ handleInputChange }  
          />
           <div className="alert alert-danger d-none" role="alert" ref={passwordAlert}>
            La contraseña debe tener almenos 6 caracteres
          </div>
        </div>

        <button className='' >
          Registrarse
        </button>

        <div className="" role="alert" ref={succesAlert}>
            Registro Correcto

            <Link to="/" className="" onClick={ () => login( email )}>Entrar</Link>
        </div>



      </form>

      <Link to="/login" className="">Ya tengo cuenta!</Link>
    </div>
  )
}