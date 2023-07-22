import { useEffect, useRef, useState } from "react"
import { ComicPreview } from "../components/ComicPreview"
import { baseUrl, publicKey } from "../helpers/APIdata"




export const AllComics = () => {

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)
    const [comics, setComics] = useState([])
    

    const showPerPage = useRef()
    
    useEffect(() => {
    
    
      fetch( `${ baseUrl }v1/public/comics?apikey=${ publicKey }&limit=${ limit }&offset=${ offset }` )
        .then( resp => resp.json() )
        .then( data => {
            setComics(data.data.results);
            
            console.log(data)
        })
   }, [ offset, limit ])
    
   
  return (
    <div>
        <div className="flex flex-wrap gap-2 justify-center">
            {
                comics?.map( comic => {
                    return(
                        <ComicPreview key={ comic.id } comic={ comic } />
                    )
                })
            }
        </div>
        



        <div>Show per page: 
            <select ref={ showPerPage } onChange={() => setLimit(showPerPage.current.value) } >
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
            </select>
            <button onClick={ () => setOffset( offset + limit )}>Siguiente</button>
            <button onClick={ () => setOffset( offset - limit )}>anterior</button>
        </div>
    </div>
  )
}
