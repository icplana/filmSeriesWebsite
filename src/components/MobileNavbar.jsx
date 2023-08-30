import { useContext, useRef } from "react"
import { AuthContext } from "../contexts/auth/AuthContext"
import { Link, NavLink } from "react-router-dom"
import { AllNavbar } from "./AllNavbar"
import { SearchNavbar } from "./SearchNavbar"


export const MobileNavbar = () => {

    const { logout, state } = useContext( AuthContext )
    const allMobile = useRef()
    const searchMobile = useRef()
    const movNavbar = useRef()

    const toggleAllMobile = () => allMobile.current.classList.toggle('hidden')
    
    const toggleSearchMobile = () => searchMobile.current.classList.toggle('hidden')

    const hideMovNavbar = () => {
        movNavbar.current.classList.remove( 'flex' )
        movNavbar.current.classList.add( 'hidden' )
    }
    const showMovNavabar = () => {
        movNavbar.current.classList.remove( 'hidden' )
        movNavbar.current.classList.add( 'flex' )
    }
    
    
    

  return (
    <div className="flex w-full sm:hidden mx-2">
        <button onClick = { showMovNavabar } className="block mr-auto ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
        </button>

        <div  ref={ movNavbar } className="hidden bg-gradient-to-b from-primary to-primaryWhite pl-5 pt-4 top-0 left-0 absolute w-screen h-screen z-10 text-3xl flex-col gap-4 ">

            <div className="absolute right-3">
                <button onClick={ hideMovNavbar } className="font-md underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                    </svg>
                </button>
            </div>

            <div className="font-semibold mt-4">
                <NavLink onClick={ hideMovNavbar } to="/">Home</NavLink>
                </div>

            <div className="">
                <div className="font-semibold w-full" onClick={ toggleAllMobile }>All</div>
                <div className="hidden bg-gradient-to-b from-sky-800 to-sky-600 w-screen relative -left-5 pl-7" ref={ allMobile }>
                    <AllNavbar hideMovNavbar={ hideMovNavbar } classNames="pt-3 pb-6" />
                </div>
            </div>


            <div>
                <div onClick ={ toggleSearchMobile } className="font-semibold">Search</div>
                <div ref={ searchMobile } className="hidden">
                    <SearchNavbar hideMovNavbar={ hideMovNavbar } classNames ="relative -left-5 pl- w-screen bg-gradient-to-b from-sky-800 to-sky-600 px-2 py-1 rounded-sm" />
                </div>
            </div>

            



            {
            state.logged
            ?''
            :
                <NavLink onClick={ hideMovNavbar } className="font-semibold" to="/login">Login</NavLink>
            }

            { 
            state.logged
            ? <div><NavLink onClick={ hideMovNavbar } className="font-semibold" to="/favorites">Mis favoritos</NavLink></div>
            : ''
            }

            { 
            state.logged
            ? <div><button className="font-semibold" onClick={ logout }>Logout</button></div>
            : ''
            }


            
        </div>

    </div>
  )
}
