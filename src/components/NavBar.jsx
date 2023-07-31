
import { Link, NavLink } from "react-router-dom"
import { useContext, useRef } from "react"
import { searchTypes } from "../helpers/APIdata"
import { LimitOffsetContext } from "../contexts/limit-offset/LimitOffsetContext"
import { AllNavbar } from "./AllNavbar"
import { SearchNavbar } from "./SearchNavbar"
import { AuthContext } from "../contexts/auth/AuthContext"
import { LoginCard } from "./LoginCard"
import { MobileNavbar } from "./MobileNavbar"


export const NavBar = () => {
 
  const search = useRef()
  const all = useRef()
  const loginCard = useRef()
  const movNavbar = useRef()

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

      
      <div className="mr-auto">
        <MobileNavbar />
      </div>

      <div className="hidden sm:flex w-full justify-evenly md:px-5 py-4">

        <div><Link to="/">Home</Link></div>

        <div onMouseEnter={ showAll } onMouseLeave={ hideAll } onClick={ hideAll } className="cursor-default">
        <span>All</span>
          <div ref={ all } className="hidden absolute">
            <AllNavbar classNames="absolute bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm"/>
          </div>
        </div>


        <div onMouseEnter={ showSearch } onMouseLeave={ hideSearch } onClick={ hideSearch } className="cursor-default">
          <span>Search</span>
          <div ref={ search } className="hidden">
        
          <SearchNavbar classNames ="absolute bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm" />
          </div>
        </div>



        {
          state.logged
          ?''
          :
            <div onClick={ showLoginCard } className="cursor-pointer" >
              <p>Login</p>
              <div className="hidden absolute bg-white w-96 right-5 rounded-md" ref={ loginCard }>
                <button className="ml-auto block p-2" onClick={ (e) =>{ hideLoginCard(); e.stopPropagation() } }>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                  </svg>
                </button>
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
      </div>

    
    </header>
  )
}
