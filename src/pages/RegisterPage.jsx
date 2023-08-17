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
            showNameAlert()
        }
        if ( password.length < 6 ) {
            validation = false
            showPasswordlAlert()
        }
        if ( email.length < 1 || !email.includes('@')) {
            validation = false
            showEmailAlert()
        }


        if ( validation === true ) {
            
           const resp = await registerEmail( email, password )
           console.log(resp)
           if ( resp.auth ) {
                succesAlert.current.classList.remove('hidden')
                login( email, resp.uid, '' )
           }
           else{
            showErrorAlert()
           }
           

            
        }
    }
    
    const handleInputChange = (e) => {
        onInputChange(e)
        
        // if ( nombre.length > 1 ) nameAlert.current.classList.add('d-none')
        // if ( password.length > 4 ) passwordAlert.current.classList.add('d-none')
        // if ( email.length > 1 && email.includes('@')) correoAlert.current.classList.add('d-none')
    
    }

    const nameAlert = useRef()
    const correoAlert = useRef()
    const passwordAlert = useRef()
    const succesAlert = useRef()
    const errorAlert = useRef()
   

    const { onInputChange, email, password, nombre } = useForm({ email: '', password: '' , nombre: '' })

    const { login } = useContext( AuthContext )

    const showNameAlert = () => {
      nameAlert.current.classList.remove('hidden')
      setTimeout(() => {        
        nameAlert.current.classList.add('hidden')
      }, 2800);
    }

    const showEmailAlert = () => {
      correoAlert.current.classList.remove('hidden')
      setTimeout(() => {          
        correoAlert.current.classList.add('hidden')
      }, 2800);
    }
    const showPasswordlAlert = () => {
      passwordAlert.current.classList.remove('hidden')
      setTimeout(() => {        
        passwordAlert.current.classList.add('hidden')
      }, 2800);
    }
  
    const showErrorAlert = () => {
      errorAlert.current.classList.remove('hidden')
      setTimeout(() => {        
        errorAlert.current.classList.add('hidden')
      }, 2800);
    }
  
    
  

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
          <div className="bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden" ref={nameAlert}>
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
           <div className=" bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden" ref={correoAlert}>
            Invalid email
          </div>
        </div>


        <div className='mb-4'>
          <label className='block font-semibold text-white2'>Password</label>
          <input 
            type="password" 
            className='rounded px-2 py-1 w-full' 
            placeholder='********'
            name='password'
            value={ password }
            onInput={ handleInputChange }  
          />
           <div className="bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden" ref={passwordAlert}>
            Password must have at least 6 characters
          </div>
        </div>

        <button className='bg-white rounded-md px-3 py-2 font-bold mb-4' >
          Register
        </button>

        <div className="bg-softGreen mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden" ref={succesAlert}>
            Succesfull registration

        </div>
        
        <div className="bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden" ref={errorAlert}>
            Something went wrong

        </div>



      </form>

      <Link to="/login" className=" text-white2 underline text-md">I have an account</Link>
    </div>
  )
}