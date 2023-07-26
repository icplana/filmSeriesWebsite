import { useContext, useState } from 'react'

import { AuthContext } from '../contexts/auth/AuthContext'
import { LimitOffsetContext } from '../contexts/limit-offset/LimitOffsetContext'

import { baseUrl, publicKey } from '../helpers/APIdata'


import { ComicPreview } from '../components/Previews/ComicPreview'
import { CharacterPreview } from '../components/Previews/CharacterPreview'
import { CreatorPreview } from '../components/Previews/CreatorPreview'
import { EventPreview } from '../components/Previews/EventPreview'
import { SeriePreview } from '../components/Previews/SeriePreview'
import { StoryPreview } from '../components/Previews/StoryPreview'
import { Loading } from '../components/Loading'




export const FavoritesPage = () => {
    
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
              setComicsFav([ ...comicsFav, data.data.results[0] ])
              console.log(data.data.results[0])
            })               
        })

        characters.map( id =>{
            const url = `${ baseUrl }v1/public/characters/${ id }?apikey=${ publicKey }`            
            fetch( url )
            .then( resp => resp.json() )
            .then( data => {
              setCharactersFav([ ...charactersFav, data.data.results[0] ])
              console.log(data.data.results[0])
            })               
        })

        creators.map( id =>{
            const url = `${ baseUrl }v1/public/creators/${ id }?apikey=${ publicKey }`            
            fetch( url )
            .then( resp => resp.json() )
            .then( data => {
              setCreatorsFav([ ...creatorsFav, data.data.results[0] ])
              console.log(data.data.results[0])
            })               
        })

        events.map( id =>{
            const url = `${ baseUrl }v1/public/events/${ id }?apikey=${ publicKey }`            
            fetch( url )
            .then( resp => resp.json() )
            .then( data => {
              setEventsFav([ ...eventsFav, data.data.results[0] ])
              console.log(data.data.results[0])
            })               
        })
                

        series.map( id =>{
            const url = `${ baseUrl }v1/public/series/${ id }?apikey=${ publicKey }`            
            fetch( url )
            .then( resp => resp.json() )
            .then( data => {
              setSeriesFav([ ...seriesFav, data.data.results[0] ])
              console.log(data.data.results[0])
            })               
        })

        stories.map( id =>{
            const url = `${ baseUrl }v1/public/stories/${ id }?apikey=${ publicKey }`            
            fetch( url )
            .then( resp => resp.json() )
            .then( data => {
              setStoriesFav([ ...storiesFav, data.data.results[0] ])
              console.log(data.data.results[0])
            })               
        })
                
    } catch (error) {
        console.error( error )
    }
   

  return (
    <div>
        {
            true
            ? <Loading />
            : 
                <div>
                    <h2>Favorites</h2>
                    
                    <h3>Comics</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            comicsFav.map( comic => (
                            <ComicPreview key={ comic.id } comic={ comic }/>
                            ))
                        }                
                    </div>

                    <h3>Characters</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            charactersFav.map( character => (
                            <CharacterPreview key={ character.id } character={ character }/>
                            ))
                        }                
                    </div>

                    <h3>Creators</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            creatorsFav.map( creator => (
                            <CreatorPreview key={ creator.id } creator={ creator }/>
                            ))
                        }                
                    </div>

                    <h3>Events</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            eventsFav.map( event => (
                            <EventPreview key={ event.id } event={ event }/>
                            ))
                        }                
                    </div>

                    <h3>Series</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            seriesFav.map( serie => (
                            <SeriePreview key={ serie.id } serie={ serie }/>
                            ))
                        }                
                    </div>

                    <h3>Stories</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        { 
                            storiesFav.map( story => (
                            <StoryPreview key ={ story  .id } story={ story }/>
                            ))
                        }                
                    </div>
                </div>
        }
    </div>
  )
}
