
import { NavLink } from 'react-router-dom'
import { searchTypes } from '../helpers/APIdata'

export const SearchNavbar = ({ classNames }) => {
  return (
    <div>
        <ul className={ classNames }>
            {
                searchTypes.map( type => (
                    <li key={ type.singular }>
                        <NavLink
                            to={`/search/${ type.singular }`}
                            className={({isActive})=> isActive ?'font-semibold' :''}
                        >
                            { type.plural.charAt(0).toUpperCase() + type.plural.slice(1) }
                        </NavLink>
                    </li>
                ))
            }
            {/* <li><NavLink to="/search/comic" className={({isActive})=> isActive ?'font-semibold' :''}>Comics</NavLink></li>
            <li><NavLink to="/search/character" className={({isActive})=> isActive ?'font-semibold' :''}>Characters</NavLink></li>
            <li><NavLink to="/search/creator" className={({isActive})=> isActive ?'font-semibold' :''}>Creators</NavLink></li>
            <li><NavLink to="/search/event" className={({isActive})=> isActive ?'font-semibold' :''}>Events</NavLink></li>
            <li><NavLink to="/search/serie" className={({isActive})=> isActive ?'font-semibold' :''}>Series</NavLink></li>
            <li><NavLink to="/search/story" className={({isActive})=> isActive ?'font-semibold' :''}>Stories</NavLink></li> */}
        </ul>
    </div>
)
}
