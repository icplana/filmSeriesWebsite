
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../firebase/firebase"

export const CreatorPreview = ({ creator }) => {
 
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
        <img src={ creator.thumbnail.path + '.' + creator.thumbnail.extension } alt={ creator.fullName + "image" } />
        <h2>{ creator.fullName }</h2>  
        <p>{ creator.description }</p>


        <p>This creator contriuted on:</p>
        <ul>
            <li>{ creator.comics.available } comics</li>
            <li>{ creator.series.available } series</li>
            <li>{ creator.events.available } events</li>
            <li>{ creator.stories.available } stories</li>
        </ul>

        <button onClick={ () => addFav( creator.id, 'creators' ) }>Add Favorites</button>
    </div>
  )
}
