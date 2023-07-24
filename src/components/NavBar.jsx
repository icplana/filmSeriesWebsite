
import { Link, NavLink } from "react-router-dom"
import { useContext, useRef } from "react"
import { searchTypes } from "../helpers/APIdata"
import { LimitOffsetContext } from "../contexts/limit-offset/LimitOffsetContext"
import { AllNavbar } from "./AllNavbar"
import { SearchNavbar } from "./SearchNavbar"


export const NavBar = () => {

 
  const search = useRef()
  const all = useRef()

  const { setLoading } = useContext( LimitOffsetContext )
  
  const showAll = () => all.current.classList.remove( 'hidden' )
  const hideAll = () => all.current.classList.add( 'hidden' )

  const showSearch = () => search.current.classList.remove( 'hidden' )
  const hideSearch = () => search.current.classList.add( 'hidden' )

  return (
    <header className="bg-gradient-to-b from-sky-800 to-sky-600 border flex min-w-screen justify-evenly md:px-5 py-4">


      <div><Link to="/">Home</Link></div>

      <div onMouseEnter={ showAll } onMouseLeave={ hideAll }>
      <span>All</span>
        <div ref={ all } className="hidden absolute">
          <AllNavbar classNames="absolute bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm"/>
        </div>
      </div>


      <div onMouseEnter={ showSearch } onMouseLeave={ hideSearch }>
        <span>Search</span>
        <div ref={ search } className="hidden">
        {/* <ul ref={ search } className="absolute hidden bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm">
          <li><NavLink to="/search/comic" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Comics</NavLink></li>
          <li><NavLink to="/search/character" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Characters</NavLink></li>
          <li><NavLink to="/search/creator" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Creators</NavLink></li>
          <li><NavLink to="/search/event" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Events</NavLink></li>
          <li><NavLink to="/search/serie" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Series</NavLink></li>
          <li><NavLink to="/search/story" className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}>Stories</NavLink></li>
        </ul> */}
        <SearchNavbar classNames ="absolute bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm" />
        </div>
      </div>



      <div>
        Login - Register
      </div>

      <hr />
    </header>
  )
}
