

import { NavLink } from 'react-router-dom'

export const AllNavbar = () => {
  return (
    <div>
        <nav>
            <ul className='flex gap-1 justify-center'>
                <li><NavLink to="/all/comics" className={({isActive})=> isActive ?'font-semibold' :''}>Comics</NavLink></li>
                <li><NavLink to="/all/characters" className={({isActive})=> isActive ?'font-semibold' :''}>Characters</NavLink></li>
                <li><NavLink to="/all/creators" className={({isActive})=> isActive ?'font-semibold' :''}>Creators</NavLink></li>
                <li><NavLink to="/all/events" className={({isActive})=> isActive ?'font-semibold' :''}>Events</NavLink></li>
                <li><NavLink to="/all/series" className={({isActive})=> isActive ?'font-semibold' :''}>Series</NavLink></li>
                <li><NavLink to="/all/stories" className={({isActive})=> isActive ?'font-semibold' :''}>Stories</NavLink></li>
            </ul>
        </nav>
    </div>
)
}
