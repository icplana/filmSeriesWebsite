import { useContext, useEffect, useRef } from "react";
import { LimitOffsetContext } from "../contexts/limit-offset/LimitOffsetContext";


export const ShowPerPage = ({ maxOffset }) => {

    const { limit, setLimit, offset, setOffset, setLoading } = useContext( LimitOffsetContext )

    const showPerPage = useRef()
    const nextButton = useRef()
    const prevButton = useRef()

    useEffect(() => {

      if ( maxOffset < (offset + limit) ) { 
        nextButton.current.disabled = true
        nextButton.current.classList.add( 'opacity-50' )
      }
      else { 
        nextButton.current.disabled = false  
        nextButton.current.classList.remove( 'opacity-50' )
      }

      if ( 
        offset === 0 ) { prevButton.current.disabled = true 
          prevButton.current.classList.add( 'opacity-50' )
      }
      else { 
        prevButton.current.disabled = false
        prevButton.current.classList.remove( 'opacity-50' )  
      }
    
     
    }, [ offset, limit, maxOffset ])
    



  return (
    <div className="flex w-full justify-between px-3 md:px-16 lg:px-14" >
      <div className="flex justify-start">
        <p className="mr-2 sm:text-lg">
          Show per page:
        </p>
        <select value={ limit } className="rounded" ref={ showPerPage } onChange={() => { setLoading(true); setLimit( showPerPage.current.value ) }} >
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
        </select>
      </div>
      <div className="flex gap-1 sm:gap-4">
        <button
          ref={ prevButton }
          className="px-2 py-1 bg-white rounded-md" 
          onClick={ () => { 
            setLoading(true);
            offset > limit 
            ? setOffset( Number(offset) - Number(limit)) 
            : offset !== 0
              ? setOffset( 0 )
              : setLoading( false )   
          }}
        >Anterior</button>
        <button
          ref={ nextButton }
          className="px-2 py-1 bg-white rounded-md" 
          onClick={ () => { 
            setLoading(true); 
            setOffset( Number(Number(offset) + Number(limit) ))  
          }}
        >Siguiente</button>
      </div>
        </div>
  )
}
