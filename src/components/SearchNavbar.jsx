
import { NavLink } from 'react-router-dom'
import { searchTypes } from '../helpers/APIdata'

export const SearchNavbar = ({ classNames ='', hideMovNavbar, setData }) => {
  return (
    <div>
        <div>
            <ul className={ classNames }>
                {
                    searchTypes.map( type => (
                        <li key={ type.singular }>
                            <NavLink
                                to={`/search/${ type.singular }`}
                                className={({isActive})=> isActive ?'font-semibold' :'hover:underline'}
                                onClick={ () => { hideMovNavbar(); setData([]) } }
                            >
                                { type.plural.charAt(0).toUpperCase() + type.plural.slice(1) }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
)
}
