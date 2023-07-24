

import { NavLink } from 'react-router-dom'
import { searchTypes } from '../helpers/APIdata'

export const AllNavbar = () => {
  return (
    <div>
        <nav>
            <ul className='flex gap-1 justify-center'>
            {
            searchTypes.map( type => (
              <li key={ type.singular }>
                <NavLink                 
                  to={"/all/" + type.plural} 
                  className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}
                  onClick={ () => setLoading( true )}
                >
                  { type.plural.charAt(0).toUpperCase() + type.plural.slice(1) }
                </NavLink>
              </li>
            ))
          }
            </ul>
        </nav>
    </div>
)
}
