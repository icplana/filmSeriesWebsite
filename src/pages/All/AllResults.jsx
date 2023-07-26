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




export const AllResults = ({ type }) => {

    const { offset, limit, loading, setLoading } = useContext( LimitOffsetContext )
    const [data, setData] = useState([])

    useEffect( () =>{ setLoading(true); setData([]) }, [] )


    useEffect(() => {

    try {
        fetch( `${ baseUrl }v1/public/${ type }?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }` )
        .then( resp => resp.json() )
        .then( data => {
            setData(data.data);
            setLoading(false)
        })
    } catch (error) {
        console.log(error)
    }
      
   }, [ offset, limit, type ])
    
   
  return (      
      <div>
        <h2>All</h2>
        <AllNavbar classNames="flex gap-1 justify-center" />

        <div>


            {
                loading
                ? ( <Loading/> )
                : (
                    <>
                        <p>There is a total of { data.total + ' ' + type }. Showing { offset } to { Number(offset) + Number(limit) }.</p>
                        <div className="flex flex-wrap gap-2 justify-center">
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
                        <ShowPerPage /> 
                    </> 
                )
            }    
       </div>
    </div>
  )
}
