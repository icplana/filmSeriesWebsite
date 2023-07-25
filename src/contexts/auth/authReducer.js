

import { types } from "./types"

const initialState = JSON.parse( sessionStorage.getItem('state')) || {
    logged: false,
    user: null

}


export const authReducer = ( state = initialState, action ) => {


switch ( action.type ){
        
        case types.login:

            sessionStorage.setItem( 'state', JSON.stringify({
                ...state,
                logged: true,
                user: action.payload
            }))

            return {
                ...state,
                logged: true,
                user: action.payload
            }


        case types.logout:
            

            sessionStorage.removeItem( 'state' )

            return {
                logged: false
            }

        
           
        case types.updateFavList:

            sessionStorage.setItem( 'state', JSON.stringify({
                ...state,
                logged: true,
                user: {
                    ...state.user,
                    favList: action.payload
                }
            }))
            return {
                ...state,
                user: {
                    ...state.user,
                    favList: action.payload
                }
            }
        
        default:
            return state
    }
}