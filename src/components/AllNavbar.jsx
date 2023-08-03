

import { NavLink } from 'react-router-dom'
import { searchTypes } from '../helpers/APIdata'
import { useContext, useRef } from 'react'
import { LimitOffsetContext } from '../contexts/limit-offset/LimitOffsetContext'

export const AllNavbar = ({ classNames = '', hideMovNavbar = '' }) => {


    const { setLoading } = useContext( LimitOffsetContext )

  return (
    <div>
        <ul className={ classNames }>
            {
            searchTypes.map( type => (
                <li key={ type.singular }>
                    <NavLink                 
                        to={"/all/" + type.plural} 
                        className={({isActive})=> isActive ?'font-semibold' :'' + "hover:underline"}
                        onClick={ () =>{ setLoading( true ); hideMovNavbar() }}
                    >
                        { type.plural.charAt(0).toUpperCase() + type.plural.slice(1) }
                    </NavLink>
                </li>
            ))
            }
        </ul>

    </div>
)
}
