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

    const titleInput = useRef()
    const nameInput = useRef()
    const comicInput = useRef()
    const characterInput = useRef()
    const creatorInput = useRef()
    const eventInput = useRef()
    const serieInput = useRef()
    const storyInput = useRef()
    
    
    const searchInfo = () => {

        const titleValue = titleInput.current && titleInput.current.value !== '' ? '&titleStartsWith=' + titleInput.current.value : '' 
        const nameValue = nameInput.current && nameInput.current.value !== '' ? '&nameStartsWith=' + nameInput.current.value : '' 
        const comicValue = comicInput.current && comicInput.current.value !== '' ? '&comics=' + comicInput.current.value : '' 
        const characterValue = characterInput.current && characterInput.current.value !== '' ? '&characters=' + characterInput.current.value : '' 
        const creatorValue = creatorInput.current && creatorInput.current.value !== ''  ? '&creators=' + creatorInput.current.value : '' 
        const eventValue = eventInput.current && eventInput.current.value !== '' ? '&events=' + eventInput.current.value : '' 
        const serieValue = serieInput.current && serieInput.current.value !== '' ? '&series=' + serieInput.current.value : '' 
        const storyValue = storyInput.current && storyInput.current.value !== '' ? '&stories=' + storyInput.current.value : '' 


        // console.log({
        //     titleValue,
        //     nameValue,
        //     characterValue,
        //     creatorValue,
        //     eventValue,
        //     serieValue,
        //     storyValue
        // })

        
        const url = `${ baseUrl }v1/public/${ type.plural }?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }${ nameValue }${ titleValue }${ comicValue }${ characterValue }${ creatorValue }${ eventValue }${ serieValue }${ storyValue }`
        // console.log(url)
      if ( 
        titleValue === '' && 
        nameValue === '' && 
        comicValue === '' && 
        characterValue === '' && 
        creatorValue === '' && 
        eventValue === '' &&
        serieValue === '' &&
        storyValue === ''
    ) { 
        setData( null ); 
        setLoading( false ) 
        return 
    }

    try{
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            setData(data.data);
            // console.log(data.data)
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
      <div className="mb-10 mt-3 mx-3">
        {
            error
            ? <Error />
            :
            <>        
                <h2 className="text-5xl mb-3 ml-5 ">Search</h2>
                <SearchNavbar setData= { setData } classNames="hidden sm:flex gap-1 justify-center mb-3" />

                <form onSubmit={ onSubmit } className="mb-3 mx-5 text-white">
                    <h4 className="text-xl font-light mb-2">Search { type.plural }</h4>


                    {
                        [ 'character','creator', 'event' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Name</label>
                                <input className="rounded px-2 py-1 " ref={ nameInput } defaultValue="" type="text" placeholder={ type.name } />
                            </div>
                        : ''
                    }

                    {
                        [ 'comic', 'serie' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Title</label>
                                <input className="rounded px-2 py-1 " ref={ titleInput } defaultValue="" type="text" placeholder={ type.title } />
                            </div>
                        : ''
                    }

                    {
                        [ 'character', 'creator', 'event', 'serie', 'story' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Comic (ID*)</label>
                                <input className="rounded px-2 py-1 " ref={ comicInput } defaultValue="" type="number" placeholder={ '84510' } />
                            </div>
                        : ''
                    }

                    {
                        [ 'comic', 'event', 'serie' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Character (ID*)</label>
                                <input className="rounded px-2 py-1 " ref={ characterInput } defaultValue="" type="number" placeholder={ '1009351' } />
                            </div>
                        : ''
                    }

                    {
                        [ 'comic', 'event', 'serie', 'story' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Creator (ID*)</label>
                                <input className="rounded px-2 py-1 " ref={ creatorInput } defaultValue="" type="number" placeholder={ '12958' } />
                            </div>
                        : ''
                    }

                    {
                        [ 'character', 'comic', 'creator', 'serie', 'story' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Event (ID*)</label>
                                <input className="rounded px-2 py-1 " ref={ eventInput } defaultValue="" type="number" placeholder={ '320' } />
                            </div>
                        : ''
                    }                    

                    {
                        [ 'character', 'comic', 'creator', 'event', 'story' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Serie (ID*)</label>
                                <input className="rounded px-2 py-1 " ref={ serieInput } defaultValue="" type="number" placeholder={ '29695' } />
                            </div>
                        : ''
                    }

                    {
                        [ 'character', 'comic', 'creator', 'event', 'serie' ].includes( type.singular )
                        ?    
                            <div className="mb-2 flex flex-col">
                                <label>Story (ID*)</label>
                                <input className="rounded px-2 py-1 " ref={ storyInput } defaultValue="" type="number" placeholder={ '166' } />
                            </div>
                        : ''
                    }
                    

                    <input type="submit" value="Buscar" className="rounded-md px-2 py-1 mt-2 bg-softRed font-semibold"/>

                    <p className="text-center italic text-md mx-1 text-white2"><span className="text-xl ">*</span>Each comic, character, creator, event, serie or story has a unic numeric ID, you can get it searching them in search section or looking for it in all section (not recomended since there are too many results). We strongly recomend you to use favorites to make it easier to save the IDs of your favorite content.</p>    
                </form>
    
                <div className="text-primary">
                {               
                    loading
                    ? ( <Loading/> )
                    : ( data === null )
                        ? <p></p>    
                        :(
                            <>
                            {
                                data.total === 0
                                ? <p className="text-center font-light text-3xl my-5">No results</p>
                                :
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
                                    </>
                            }
                                <ShowPerPage maxOffset={ data.total } /> 
                            </> 
                        )
                }    
                </div>
            </>
        }
    </div>
  )
}
