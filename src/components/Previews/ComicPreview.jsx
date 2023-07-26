import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { getFavoritesDB, updateFavoriteDB } from "../../firebase/firebase"



export const ComicPreview = ({ comic }) => {

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
        {
            ( comic.images[0] )
            ? <img src={ comic.images[0].path + '.' + comic.images[0].extension } alt="" />
            : <img src="../../assets/images/image_not_available.jpg" alt="No image" className="w-full"/>
        }
        <h3>{ comic.title }</h3>

        <p>{ comic.description }</p>

        <div>
          {
            comic.creators.items.length > 0
            ? <p>Creators:</p>
            :''
          }
          <ul>          
          {
            comic.creators.items.map( creator => (
              <li key={ creator.name }>
                { creator.name } ({ creator.role })
              </li>
            ))
          }
          </ul>
        </div>

        <button onClick={ () => addFav( comic.id, 'comics' ) }>Add Favorites</button>
        

    </div>
  )
}
