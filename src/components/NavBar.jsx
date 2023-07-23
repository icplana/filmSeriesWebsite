
import { creatorsData } from "../helpers/getAllCreators"
import { seriesData } from "../helpers/getAllSeries"
import { eventsData } from "../helpers/getAllEvents"
import { charactersData } from "../helpers/getAllCharacters"
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
        <Link to="/allcomics" >Todos los comics</Link>
      </div>


      <div onMouseEnter={ showBuscador } onMouseLeave={ hideBuscador }>
        Buscador
        <ul ref={ buscador } className="hidden">
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
        Login - Registrarse
      </div>

      <hr />
    </header>
  )
}
