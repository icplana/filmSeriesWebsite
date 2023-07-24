import { useEffect, useRef, useState } from "react"
import { baseUrl, publicKey } from "../../helpers/APIdata"

import { SearchNavbar } from "../../components/SearchNavbar"
import { CreatorPreview } from "../../components/Previews/CreatorPreview"


export const CreatorSearch = () => {

    const input = useRef()
    const [searchText, setsearchText] = useState("")
    const [APIData, setAPIData] = useState({})
  
   
    const onSubmit = (e) => {
        e.preventDefault()
        searchInfo()
    }
   
    const searchInfo = () => {
    
    setsearchText( input.current.value )
    console.log({baseUrl, publicKey, input: input.current.value })

    fetch( `${ baseUrl }v1/public/creators?apikey=${ publicKey }&nameStartsWith=${ input.current.value }` )
    .then( resp => resp.json() )
    .then( data => {
        setAPIData(data.data);

        console.log(data)
        
    })

   }


  return (
    <div>
        <h2>Buscador</h2>

        <SearchNavbar/>


        <form onSubmit={ onSubmit }>
          <p>Buscar por creador</p>
            <div>
                <input ref={ input } type="text" placeholder="Bengal" />
            </div>

            <input type="submit" value="Buscar" className=" bg-zinc-600"/>
           

        </form>

        <div>
            
            {
                searchText === ""
                ? ''
                : (
                    <div>
                        <h2>Resultados:</h2>
                        <p>Hay { APIData?.total } resultados</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {
                                APIData.results?.map( creator => {
                                    return(
                                        <CreatorPreview key={ creator.id } creator={ creator } />
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                )
            }
            
        </div>

    </div>
  )
}
