import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../Firebase/firebase"



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
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md">
        {
            ( comic.images[0] )
            ? <img src={ comic.images[0].path + '.' + comic.images[0].extension } alt="" className="rounded-t-md aspect-square"/>
            : <img src="../../assets/images/image_not_available.jpg" alt="No image" className="w-full rounded-t-md aspect-square"/>
        }
        <div className="my-2 mx-2">
          <h3 className="font-bold mb-1">{ comic.title }</h3>

          <p className="mb-1 text-sm">{ comic.description }</p>

          <div className="mb-1">
            {
              comic.creators.items.length > 0
              ? <p className="text-lg font-light">Creators:</p>
              :''
            }
            <ul>          
            {
              comic.creators.items.map( creator => (
                <li key={ creator.name } className="italic">
                  { creator.name } ({ creator.role })
                </li>
              ))
            }
            </ul>
          </div>
            
        <button className="border-red rounded font-semibold mt-1 text-red px-2 py-1 border-2 hover:bg-red hover:text-white" onClick={ () => addFav( comic.id, 'comics' ) }>Add Favorites</button>
        </div>

        

    </div>
  )
}
