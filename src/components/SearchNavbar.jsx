
import { NavLink } from 'react-router-dom'

export const SearchNavbar = () => {
  return (
    <div>
        <nav>
            <ul className='flex gap-1 justify-center'>
                <li><NavLink to="/search/comic" className={({isActive})=> isActive ?'font-semibold' :''}>Comics</NavLink></li>
                <li><NavLink to="/search/character" className={({isActive})=> isActive ?'font-semibold' :''}>Characters</NavLink></li>
                <li><NavLink to="/search/creator" className={({isActive})=> isActive ?'font-semibold' :''}>Creators</NavLink></li>
                <li><NavLink to="/search/event" className={({isActive})=> isActive ?'font-semibold' :''}>Events</NavLink></li>
                <li><NavLink to="/search/serie" className={({isActive})=> isActive ?'font-semibold' :''}>Series</NavLink></li>
                <li><NavLink to="/search/story" className={({isActive})=> isActive ?'font-semibold' :''}>Stories</NavLink></li>
            </ul>
        </nav>
    </div>
)
}
