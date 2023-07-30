
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../Firebase/firebase"

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
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md" >
        <img src={ creator.thumbnail.path + '.' + creator.thumbnail.extension } alt={ creator.fullName + "image" } />
        <div className="m-2">
          <h2 className="font-bold">{ creator.fullName }</h2>  
          <p className="text-sm">{ creator.description }</p>


          <p className="font-light text-lg">This creator contriuted on:</p>
          <ul>
              <li className="italic">{ creator.comics.available } comics</li>
              <li className="italic">{ creator.series.available } series</li>
              <li className="italic">{ creator.events.available } events</li>
              <li className="italic">{ creator.stories.available } stories</li>
          </ul>

          <button className="border-red rounded font-semibold mt-1 text-red px-2 py-1 border-2 hover:bg-red hover:text-white" onClick={ () => addFav( creator.id, 'creators' ) }>Add Favorites</button>
        </div> 
    </div>
  )
}
