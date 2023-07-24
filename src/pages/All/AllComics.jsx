import { useContext, useEffect, useState } from "react"
import { ComicPreview } from "../../components/Previews/ComicPreview"
import { baseUrl, publicKey } from "../../helpers/APIdata"
import { AllNavbar } from "../../components/AllNavbar"
import { LimitOffsetContext } from "../../contexts/limit-offset/LimitOffsetContext"
import { ShowPerPage } from "../../components/ShowPerPage"
import { Loading } from "../../components/Loading"




export const AllComics = () => {


    const [comics, setComics] = useState([])
    

    const { offset, limit, loading, setLoading } = useContext( LimitOffsetContext )
    


    useEffect(() => {
    
    
      fetch( `${ baseUrl }v1/public/comics?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }` )
        .then( resp => resp.json() )
        .then( data => {
            setComics(data.data);
            setLoading(false)
            console.log(data)
        })
   }, [ offset, limit ])
    
   
  return (      
      <div>
        <h2>All</h2>
        <AllNavbar />
        <div>


            {
                loading
                ? ( <Loading/> )
                : (
                    <>
                        <p>There is a total of { comics.total } comics. Showing { offset } to { Number(offset) + Number(limit) }.</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            { 
                                comics.results?.map( comic => (
                                    <ComicPreview key={ comic.id } comic={ comic } />
                                ))
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
