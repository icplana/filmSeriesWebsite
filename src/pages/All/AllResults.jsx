import { useContext, useEffect, useState } from "react"

import { LimitOffsetContext } from "../../contexts/limit-offset/LimitOffsetContext"

import { baseUrl, publicKey } from "../../helpers/APIdata"

import { AllNavbar } from "../../components/AllNavbar"
import { ShowPerPage } from "../../components/ShowPerPage"
import { Loading } from "../../components/Loading"

import { ComicPreview } from "../../components/Previews/ComicPreview"
import { EventPreview } from "../../components/Previews/EventPreview"
import { SeriePreview } from "../../components/Previews/SeriePreview"
import { StoryPreview } from "../../components/Previews/StoryPreview"
import { CharacterPreview } from "../../components/Previews/CharacterPreview"
import { CreatorPreview } from "../../components/Previews/CreatorPreview"
import { Error } from "../../components/Error"




export const AllResults = ({ type }) => {

    const { offset, limit, loading, setLoading, error, setError } = useContext( LimitOffsetContext )
    const [data, setData] = useState([])

    useEffect( () =>{ setLoading(true); setData([]); setError( false ) }, [] )


    useEffect(() => {

    try {
        fetch( `${ baseUrl }v1/public/${ type }?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }` )
        .then( resp => resp.json() )
        .then( data => {
            
            setData(data.data);
            if ( data.data ) { setLoading( false ) } else{ setError( true )}
        })
    } catch (error) {
        setError( true )
        
        console.log(error)
    }
      
   }, [ offset, limit, type ])
    
   
  return (      
      <div className="">
            {   
                error
                ? <Error />
                :(
                    loading
                    ? ( <Loading/> )
                    : (
                        <>
                            <h2 className="text-5xl mb-3 ml-5" >All</h2>
                            <AllNavbar classNames="gap-1 justify-center mb-3 hidden sm:flex" />
                            <div className="mb-10 text-primary">
                                <p 
                                    className="italic mb-3 ml-5" 
                                >
                                    There is a total of { data.total + ' ' + type }. Showing { offset } to {Math.min( Number(offset) + Number(limit), Number(data.total) ) }.
                                </p>
                                <ShowPerPage maxOffset={ data.total } /> 
                                <div className="flex flex-wrap gap-1 justify-around mb-4 mt-4">
                                    { 
                                    type === 'comics' 
                                        ? data.results?.map( data => <ComicPreview key={ data.id } comic={ data } /> ) 
                                        : type === 'characters' 
                                            ? data.results?.map( data => <CharacterPreview key={ data.id } character={ data } /> )
                                            : type === 'creators'
                                                ? data.results?.map( data => <CreatorPreview key={ data.id } creator={ data } /> )
                                                : type === 'events'
                                                    ? data.results?.map( data => <EventPreview key={ data.id } event={ data } /> )
                                                    : type === 'series'
                                                        ? data.results?.map( data => <SeriePreview key={ data.id } serie={ data } /> )
                                                        : type === 'stories'
                                                            ? data.results?.map( data => <StoryPreview key={ data.id } story={ data } /> )
                                                            : ''
                                    }                
                                </div>
                                <ShowPerPage maxOffset={ data.total } /> 
                            </div>
                        </> 
                    )
                )
            }    
    </div>
  )
}
