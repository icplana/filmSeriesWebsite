
import { Link, NavLink } from "react-router-dom"
import { useContext, useRef } from "react"
import { searchTypes } from "../helpers/APIdata"
import { LimitOffsetContext } from "../contexts/limit-offset/LimitOffsetContext"
import { AllNavbar } from "./AllNavbar"
import { SearchNavbar } from "./SearchNavbar"
import { AuthContext } from "../contexts/auth/AuthContext"
import { LoginCard } from "./LoginCard"


export const NavBar = () => {
  
  console.log(window.innerWidth)
 
  const search = useRef()
  const all = useRef()
  const loginCard = useRef()

  const { state, logout } = useContext( AuthContext )
 
  const { setLoading } = useContext( LimitOffsetContext )
  
  const showAll = () => all.current.classList.remove( 'hidden' )
  const hideAll = () => all.current.classList.add( 'hidden' )

  const showSearch = () => search.current.classList.remove( 'hidden' )
  const hideSearch = () => search.current.classList.add( 'hidden' )

  const showLoginCard = () => loginCard.current.classList.remove('hidden')
  const hideLoginCard = () => loginCard.current.classList.add('hidden')

  return (
    <header className="bg-gradient-to-b from-primary to-primaryWhite border flex min-w-screen justify-evenly md:px-5 py-4">


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
       
        <SearchNavbar classNames ="absolute bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm" />
        </div>
      </div>



      {
        state.logged
        ?''
        :
          <div onClick={ showLoginCard } >
            <p>Login</p>
            <div className="hidden absolute bg-slate-100" ref={ loginCard }>
              <button className="ml-auto block p-2" onClick={ (e) =>{ hideLoginCard(); e.stopPropagation() } }>X</button>
              <LoginCard hideLoginCard ={hideLoginCard}/>
            </div>       
          </div>
      }

      { 
        state.logged
        ? <div><Link to="/favorites">Mis favoritos</Link></div>
        : ''
      }

      { 
        state.logged
        ? <div><button onClick={ logout }>Logout</button></div>
        : ''
      }

    
    </header>
  )
}
