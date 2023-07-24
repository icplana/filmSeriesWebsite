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




export const Search = ({ type, searchParam }) => {
    
    const { offset, limit, loading, setLoading } = useContext( LimitOffsetContext )
    const [data, setData] = useState([])
    const input = useRef()
    
    
    const searchInfo = () => {
        const url = `${ baseUrl }v1/public/${ type }?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }&${ searchParam }=${ input.current.value }`
        
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            setData(data.data);
            setLoading(false)
            console.log(data)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        searchInfo()
    }

    useEffect( () =>{ setLoading(true); setData([]) }, [] )
    
    
    useEffect(() => {
        
    searchInfo()

   }, [ offset, limit, type ])
    
   
  return (      
      <div>
        <h2>Search</h2>
        <SearchNavbar classNames="flex gap-1 justify-center" />

        <form onSubmit={ onSubmit }>
          <p>Buscar por { type.slice(0,-1)}</p>
            <div>
                <input ref={ input } defaultValue="" type="text" placeholder={ type.slice(0,-1)} />
            </div>

            <input type="submit" value="Buscar" className=" bg-zinc-600"/>
           

        </form>

        
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
