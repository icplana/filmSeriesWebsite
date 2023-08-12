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
                succesAlert.current.classList.remove('hidden')
                login( email )
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
    <div className="mt-2 sm:mt-3 text-primary w-screen sm:max-w-lg px-5">
      <h3 className='text-4xl font-light mb-3 text-white2'>Register</h3>
    <form className='' onSubmit={onRegister}>
      
        <div className='mb-4 w-full'>          
          <label htmlFor="nombre" className='block font-semibold text-white2'>Email</label>
          <input 
            type="text" 
            id='nombre'
            name='nombre' 
            className='rounded px-2 py-1 w-full' 
            placeholder='Michael Smith'
            value={ nombre }
            onInput={ onInputChange }            
          />
          <div className="bg-softRed" ref={nameAlert}>
            Invalid name
          </div>
        </div>
      
        <div className=''>          
          <label htmlFor="email" className='block font-semibold text-white2'>Email</label>
          <input 
            type="email" 
            id='email'
            name='email' 
            className='rounded px-2 py-1 w-full' 
            placeholder='email@email.com'
            value={ email }
            onInput={ handleInputChange }            
          />
           <div className=" bg-softRed" ref={correoAlert}>
            Invalid email
          </div>
        </div>


        <div className=''>
          <label className='block font-semibold text-white2'>Password</label>
          <input 
            type="password" 
            className='rounded px-2 py-1 w-full' 
            placeholder='********'
            name='password'
            value={ password }
            onInput={ handleInputChange }  
          />
           <div className="bg-softRed" ref={passwordAlert}>
            Password must have at least 6 characters
          </div>
        </div>

        <button className='bg-white rounded-md px-3 py-2 font-bold mb-4' >
          Register
        </button>

        <div className="bg-softGreen" ref={succesAlert}>
            Succesfull registration

        </div>



      </form>

      <Link to="/login" className=" text-white2 underline text-md">I have an account</Link>
    </div>
  )
}