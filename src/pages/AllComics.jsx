import { useRef, useState } from "react"
import { getAllComicsBySteps } from "../helpers/getAllComics"
import { ComicPreview } from "../components/ComicPreview"

const data = await getAllComicsBySteps()
const comics = data.data.results

export const AllComics = () => {

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)

    const showPerPage = useRef()

    console.log(comics)
   
  return (
    <div>
        <div className="flex flex-wrap gap-2 justify-center">
            {
                comics.map( comic => {
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
