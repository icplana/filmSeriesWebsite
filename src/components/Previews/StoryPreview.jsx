import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../Firebase/firebase"


export const StoryPreview = ({ story }) => {

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

        <h2>{ story.title }</h2>  

        <p>Number of comics: { story.comics.available }</p>      
    
        <button onClick={ () => addFav( story.id, 'stories' ) }>Add Favorites</button>
    </div>
  )
}
