import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../firebase/firebase"



export const EventPreview = ({ event }) => {
  
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
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4" >
        <img src={ event.thumbnail.path + '.' + event.thumbnail.extension } alt={ event.fullName + "image" } />
        <h2>{ event.title }</h2>  
        <p>{ event.description }</p>


        <p>From this event:</p>
        <ul>
            <li>{ event.comics.available } comics</li>
            <li>{ event.characters.available } characters</li>
            <li>{ event.series.available } series</li>
            <li>{ event.creators.available } creators</li>
            <li>{ event.stories.available } stories</li>
        </ul>

        <button onClick={ () => addFav( event.id, 'events' ) }>Add Favorites</button>
    </div>
  )
}
