import { useContext, useEffect, useRef, useState } from "react"

import { LimitOffsetContext } from "../../contexts/limit-offset/LimitOffsetContext"

import { baseUrl, publicKey } from "../../helpers/APIdata"


import { SearchNavbar } from "../../components/SearchNavbar"
import { ShowPerPage } from "../../components/ShowPerPage"
import { Loading } from "../../components/Loading"

import { ComicPreview } from "../../components/Previews/ComicPreview"
import { EventPreview } from "../../components/Previews/EventPreview"
import { SeriePreview } from "../../components/Previews/SeriePreview"
import { StoryPreview } from "../../components/Previews/StoryPreview"
import { CharacterPreview } from "../../components/Previews/CharacterPreview"
import { CreatorPreview } from "../../components/Previews/CreatorPreview"
import { Error } from "../../components/Error"




export const Search = ({ type, searchParam }) => {
    
    const { offset, limit, loading, setLoading, error, setError } = useContext( LimitOffsetContext )
    const [data, setData] = useState([])
    const input = useRef()
    
    
    const searchInfo = () => {
        const searchFilter = () => {
            if ( input.current.value === '' ) return ''
            return `&${ searchParam }=${ input.current.value }`
        }
        const url = `${ baseUrl }v1/public/${ type.plural }?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }&${ searchParam }=${ input.current.value }`
        
      if ( input.current.value === '' ) { 
        setData( null ); 
        setLoading( false ) 
        return 
    }

    try{
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            setData(data.data);
            if ( data.data ) { setLoading( false ) } else{ setError( true )}
            
        })
    } catch (error) {
        console.error( error )
    }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        searchInfo()
    }

    useEffect( () =>{ setLoading(true); setData([]); setError( false ) }, [] )
    
    
    useEffect(() => {
        
    searchInfo()

   }, [ offset, limit, type ])
    
   
  return (      
      <div className="mb-10 mt-3">
        {
            error
            ? <Error />
            :
            <>        
                <h2 className="text-5xl mb-3">Search</h2>
                <SearchNavbar classNames="flex gap-1 justify-center mb-3" />

                <form onSubmit={ onSubmit } className="mb-3">
                    <p className="text-xl font-light mb-2">Search by { type.singular }</p>
                    <div className="mb-2">
                        <input className="rounded px-2 py-1 " ref={ input } defaultValue="" type="text" placeholder={ type.example + '...' } />
                    </div>

                    <input type="submit" value="Buscar" className="rounded-md bg-white px-2 py-1 mt-2 bg-zinc-600 font-semibold"/>
        
                </form>
    
                <div>
                {               
                    loading
                    ? ( <Loading/> )
                    : ( data === null )
                        ? <p></p>    
                        :(
                            <>
                                <p className="italic mb-3">There is a total of { data.total + ' ' + type.plural }. Showing { offset } to { Number(offset) + Number(limit) }.</p>
                                <div className="flex flex-wrap gap-2 justify-center mb-4">
                                    { 
                                    type.plural === 'comics' 
                                        ? data.results?.map( data => <ComicPreview key={ data.id } comic={ data } /> ) 
                                        : type.plural === 'characters' 
                                            ? data.results?.map( data => <CharacterPreview key={ data.id } character={ data } /> )
                                            : type.plural === 'creators'
                                                ? data.results?.map( data => <CreatorPreview key={ data.id } creator={ data } /> )
                                                : type.plural === 'events'
                                                    ? data.results?.map( data => <EventPreview key={ data.id } event={ data } /> )
                                                    : type.plural === 'series'
                                                        ? data.results?.map( data => <SeriePreview key={ data.id } serie={ data } /> )
                                                        : type.plural === 'stories'
                                                            ? data.results?.map( data => <StoryPreview key={ data.id } story={ data } /> )
                                                            : ''
                                    }                
                                </div>
                                <ShowPerPage /> 
                            </> 
                        )
                }    
                </div>
            </>
        }
    </div>
  )
}
