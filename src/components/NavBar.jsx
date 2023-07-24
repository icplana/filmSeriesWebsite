
import { Link, NavLink } from "react-router-dom"
import { useRef } from "react"


export const NavBar = () => {

  const all = useRef()
  const search = useRef()
  
  const showAll = () => all.current.classList.remove( 'hidden' )
  const hideAll = () => all.current.classList.add( 'hidden' )

  const showSearch = () => search.current.classList.remove( 'hidden' )
  const hideSearch = () => search.current.classList.add( 'hidden' )

  return (
    <header className="bg-gradient-to-b from-sky-800 to-sky-600 border flex min-w-screen justify-evenly md:px-5 py-4">


      <div><Link to="/">Home</Link></div>

      <div onMouseEnter={ showAll } onMouseLeave={ hideAll } >
      <Link to="/all">All</Link>
        <ul ref={ all } className="absolute hidden bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm">
          <li><NavLink to="/all/comics" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Comics</NavLink></li>
          <li><NavLink to="/all/characters" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Characters</NavLink></li>
          <li><NavLink to="/all/creators" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Creators</NavLink></li>
          <li><NavLink to="/all/events" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Events</NavLink></li>
          <li><NavLink to="/all/series" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Series</NavLink></li>
          <li><NavLink to="/all/stories" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Stories</NavLink></li>
        </ul>
      </div>


      <div onMouseEnter={ showSearch } onMouseLeave={ hideSearch }>
        <Link to="/search">Search</Link>
        <ul ref={ search } className="absolute hidden bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm">
          <li><NavLink to="/search/comic" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Comics</NavLink></li>
          <li><NavLink to="/search/character" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Characters</NavLink></li>
          <li><NavLink to="/search/creator" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Creators</NavLink></li>
          <li><NavLink to="/search/event" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Events</NavLink></li>
          <li><NavLink to="/search/serie" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Series</NavLink></li>
          <li><NavLink to="/search/story" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Stories</NavLink></li>
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
