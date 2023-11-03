import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../Firebase/firebase"


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
    <div className="bg-white w-10/12 sm:w-5/12 xl:w-3/12 rounded-md text-primary" >
        <img className="w-full rounded-t-md aspect-square" src={ character.thumbnail.path + '.' + character.thumbnail.extension } alt={ character.name + "image" } />
        <div className="m-2">
          <h2 className="font-bold">{ character.name }</h2>  
          <p className="text-sm">{ character.description }</p>

          <p className="text-lg font-light">Appears on:</p>
          <ul>
              <li className="italic">{ character.comics.available } comics</li>
              <li className="italic">{ character.series.available } series</li>
              <li className="italic">{ character.events.available } events</li>
              <li className="italic">{ character.stories.available } stories</li>
          </ul>

          <p>ID: { character.id }</p>    
          
          {
            state.logged
            ? <button className="border-red rounded font-semibold mt-1 text-red px-2 py-1 border-2 hover:bg-red hover:text-white" onClick={ () => addFav( character.id, 'characters' ) }>Add Favorites</button>
            : ''
          }
      </div>
    </div>
  )
}
