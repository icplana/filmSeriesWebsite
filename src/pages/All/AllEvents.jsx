import { useEffect, useRef, useState } from "react"
import { ComicPreview } from "../../components/Previews/ComicPreview"
import { baseUrl, publicKey } from "../../helpers/APIdata"
import { AllNavbar } from "../../components/AllNavbar"

import { EventPreview } from "../../components/Previews/EventPreview"




export const AllEvents = () => {

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    

    const showPerPage = useRef()
    
    useEffect(() => {
    
    
      fetch( `${ baseUrl }v1/public/events?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }` )
        .then( resp => resp.json() )
        .then( data => {
            setEvents(data.data);
            setLoading(false)
            console.log(data)
        })
   }, [ offset, limit ])
    
   
  return (      
      <div>
        <h2>All</h2>
        <AllNavbar />

        {
            loading
            ? ''
            : <p>There is a total of { events.total } events. Showing { offset } to { Number(offset) + Number(limit) }.</p>
           }

        <div className="flex flex-wrap gap-2 justify-center">
           
           
           
           
            {                
                loading
                ? 'Loading'
                :                     
                        events.results?.map( event => {
                            return(
                                <EventPreview key={ event.id } event={ event } />
                            )
                        })
            }
        </div>
        



        <div>Show per page: 
            <select ref={ showPerPage } onChange={() => {setLimit(showPerPage.current.value); setLoading(true) }} >
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
