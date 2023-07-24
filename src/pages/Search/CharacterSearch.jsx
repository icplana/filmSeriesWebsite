import { useEffect, useRef, useState } from "react"
import { baseUrl, publicKey } from "../../helpers/APIdata"
import { ComicPreview } from "../../components/Previews/ComicPreview"
import { SearchNavbar } from "../../components/SearchNavbar"
import { CharacterPreview } from "../../components/Previews/CharacterPreview"


export const CharacterSearch = () => {

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

    fetch( `${ baseUrl }v1/public/characters?apikey=${ publicKey }&name=${ input.current.value }` )
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
          <p>Buscar por personaje</p>
            <div>
                <input ref={ input } defaultValue="" type="text" placeholder="Spider-man..." />
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
                        <p>Hay { APIData.total } resultados</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {
                                APIData.results?.map( character => {
                                    return(
                                        <CharacterPreview key={ character.id } character={ character } />
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
