import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/auth/AuthContext'
import { ComicPreview } from './Previews/ComicPreview'
import { baseUrl, publicKey } from '../helpers/APIdata'
import { LimitOffsetContext } from '../contexts/limit-offset/LimitOffsetContext'
import { Loading } from './Loading'
import { CharacterPreview } from './Previews/CharacterPreview'
import { CreatorPreview } from './Previews/CreatorPreview'
import { EventPreview } from './Previews/EventPreview'
import { SeriePreview } from './Previews/SeriePreview'


export const FavoriteType = ({ type }) => {
    
    const { loading, setLoading } = useContext( LimitOffsetContext )
    const { state: { user: { favList: { comics, characters, creators, events, series, stories } } } } = useContext( AuthContext )

    const [comicsFav, setComicsFav] = useState([])
    const [charactersFav, setCharactersFav] = useState([])
    const [creatorsFav, setCreatorsFav] = useState([])
    const [eventsFav, setEventsFav] = useState([])
    const [seriesFav, setSeriesFav] = useState([])
    const [storiesFav, setStoriesFav] = useState([])
    
    

    try {
        comics.map( id =>{

            const url = `${ baseUrl }v1/public/comics/${ id }?apikey=${ publicKey }`
            
            fetch( url )
            .then( resp => resp.json() )
            .then( data => {

            })
            
                
        })
                
    } catch (error) {
        console.error( error )
    }
   

  return (
    <div>
        {
            false
            ? <Loading />
            : 
                <div>
                    <h2>Favorites</h2>
                    
                    <h3>Comics</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            dataFav.comics.map( comic => (
                            <ComicPreview comic={ comic }/>
                            ))
                        }                
                    </div>

                    <h3>Characters</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            dataFav.characters.map( character => (
                            <CharacterPreview character={ character }/>
                            ))
                        }                
                    </div>

                    <h3>Creators</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            dataFav.creators.map( creator => (
                            <CreatorPreview creator={ creator }/>
                            ))
                        }                
                    </div>

                    <h3>Events</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            dataFav.events.map( event => (
                            <EventPreview event={ event }/>
                            ))
                        }                
                    </div>

                    <h3>Series</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            dataFav.series.map( serie => (
                            <SeriePreview serie={ serie }/>
                            ))
                        }                
                    </div>

                    <h3>Stories</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            dataFav.stories.map( story => (
                            <StoryPreview comic={ story }/>
                            ))
                        }                
                    </div>
                </div>
        }
    </div>
  )
}
