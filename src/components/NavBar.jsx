
import { Link } from "react-router-dom"
import { useRef } from "react"


export const NavBar = () => {

  const buscador = useRef()
  
  const showBuscador = () => buscador.current.classList.remove( 'hidden' )
  const hideBuscador = () => buscador.current.classList.add( 'hidden' )

  return (
    <header className="bg-gradient-to-b from-sky-800 to-sky-600 border flex min-w-screen justify-evenly md:px-5 py-4">


      <div><Link to="/">Home</Link></div>

      <div>
        <Link to="/allcomics" >All the comics</Link>
      </div>


      <div onMouseEnter={ showBuscador } onMouseLeave={ hideBuscador }>
        <Link to="/search">Search</Link>
        <ul ref={ buscador } className="absolute hidden bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm">
          <li>Personajes</li>
          <li>Cómics</li>
          <li>Creadores</li>
          <li>Eventos</li>
          <li>Series</li>
          <li>Stories</li>
        </ul>

      </div>


      <div>
        <form action="">
          <input type="text" placeholder="Buscar comics" />
          <input type="submit" value="Buscar" />
        </form>
      </div>

      <div>
        Login - Register
      </div>

      <hr />
    </header>
  )
}
