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
    <div className="bg-white w-10/12 sm:w-5/12 xl:w-3/12 rounded-md p-2" >

        <h2 className="font-bold">{ story.title }</h2>  

        <p className="font-light text-lg">Number of comics: { story.comics.available }</p>      

        <p>ID: { story.id }</p>  

        {
            state.logged
            ? <button className="border-red rounded font-semibold mt-1 text-red px-2 py-1 border-2 hover:bg-red hover:text-white" onClick={ () => addFav( story.id, 'stories' ) }>Add Favorites</button>
            : ''
          }
    </div>
  )
}
