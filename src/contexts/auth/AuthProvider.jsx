import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { AuthContext } from "./AuthContext"
import { types } from "./types"



const initialState = JSON.parse( sessionStorage.getItem('state')) || {
  logged: false,
  user: null
}


export const AuthProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer( authReducer, initialState )

  const login = async ( email =  '', id, favList ) => {
    const action = {
      type: types.login,
      payload: { 
        id,
        email,
        favList 
      },
    }
    dispatch( action )
  }

  const logout = async () => {
    const action = { type: types.logout }
    dispatch( action )
  }

  const updateFavList = async ( favList ) => {
    const action = {
      type: types.updateFavList,
      payload: favList      
    }

    dispatch( action )
  }

  const printState = async () => {
    const action = { type: 'printState'}
    dispatch(action)
  }



  return (
    <AuthContext.Provider value={ { state, login, logout, updateFavList, printState } }>
        { children }
    </AuthContext.Provider>
  )
}