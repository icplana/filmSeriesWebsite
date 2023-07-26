import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../firebase/firebase"


export const CharacterPreview = ({ character }) => {

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
        <img src={ character.thumbnail.path + '.' + character.thumbnail.extension } alt={ character.name + "image" } />
        <h2>{ character.name }</h2>  
        <p>{ character.description }</p>

        <p>Appears on:</p>
        <ul>
            <li>{ character.comics.available } comics</li>
            <li>{ character.series.available } series</li>
            <li>{ character.events.available } events</li>
            <li>{ character.stories.available } stories</li>
        </ul>    
        
        <button onClick={ () => addFav( character.id, 'characters' ) }>Add Favorites</button>
    </div>
  )
}
