import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../Firebase/firebase"



export const SeriePreview = ({ serie }) => {
  
  const { updateFavList, state } = useContext( AuthContext )
  const addFav = ( id, type ) => {    
    const favList = state.user.favList

    let favListType
    if ( type === 'comics') favListType = favList.comics
    if ( type === 'characters') favListType = favList.characters
    if ( type === 'creators') favListType = favList.creators
    if ( type === 'events') favListType = favList.events
    if ( type === 'series') favListType = favList.series
    if ( type === 'stories') favListType = favList.stories

    const newFavListType = [ ...favListType, id ]
    
    const newFavList = {
      ...favList,
      [type]: newFavListType
    }

    updateFavList(newFavList)
    updateFavoriteDB({ userId:state.user.id, favoritesList: newFavList })
    
    
  }


    return (
      <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4">
         
        <img src={ serie.thumbnail.path + '.' + serie.thumbnail.extension } alt="" />
        
        <h3>{ serie.title }</h3>

        <p>{ serie.description }</p>
        <p>Start year: { serie.startYear }</p>
        <p>End year: { serie.endYear }</p>
  
          
        <button onClick={ () => addFav( serie.id, 'series' ) }>Add Favorites</button>
      </div>
    )
  }
  