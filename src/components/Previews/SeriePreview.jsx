import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/AuthContext"
import { updateFavoriteDB } from "../../Firebase/firebase"



export const SeriePreview = ({ serie }) => {
  
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
      <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md text-primary">
         
        <img className="w-full rounded-t-md aspect-square" src={ serie.thumbnail.path + '.' + serie.thumbnail.extension } alt="" />
        <div className="m-2">     
          <h3 className="font-bold">{ serie.title }</h3>

          <p className="text-sm">{ serie.description }</p>
          <p className="italic">Start year: { serie.startYear }</p>
          <p className="italic">End year: { serie.endYear }</p>

          <p>ID: { serie.id }</p>  
            
          {
            state.logged
            ? <button className="border-red rounded font-semibold mt-1 text-red px-2 py-1 border-2 hover:bg-red hover:text-white" onClick={ () => addFav( serie.id, 'series' ) }>Add Favorites</button>
            : ''
          }
        </div>
      </div>
    )
  }
  