import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../Firebase/firebase"



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
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md text-primary" >
        <img className="w-full aspect-square rounded-t-md" src={ event.thumbnail.path + '.' + event.thumbnail.extension } alt={ event.fullName + "image" } />
        <div className="m-2">
          <h2 className="font-bold">{ event.title }</h2>  
          <p className="text-sm">{ event.description }</p>


          <p className="text-lg font-light">From this event:</p>
          <ul>
              <li className="italic">{ event.comics.available } comics</li>
              <li className="italic">{ event.characters.available } characters</li>
              <li className="italic">{ event.series.available } series</li>
              <li className="italic">{ event.creators.available } creators</li>
              <li className="italic">{ event.stories.available } stories</li>
          </ul>

          <p>ID: { event.id }</p>  

          {
            state.logged
            ? <button className="border-red rounded font-semibold mt-1 text-red px-2 py-1 border-2 hover:bg-red hover:text-white" onClick={ () => addFav( event.id, 'events' ) }>Add Favorites</button>
            : ''
          }
        </div>
    </div>
  )
}
