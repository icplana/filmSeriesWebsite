import { useContext, useRef } from "react";
import { LimitOffsetContext } from "../contexts/limit-offset/LimitOffsetContext";


export const ShowPerPage = () => {

    const { limit, setLimit, offset, setOffset, setLoading } = useContext( LimitOffsetContext )

    const showPerPage = useRef()

  return (
    <div>Show per page: 
            <select ref={ showPerPage } onChange={() => {setLimit(showPerPage.current.value) }} >
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
            </select>
            <button onClick={ () => { setOffset( offset - limit ); setLoading( true )}}>Anterior</button>
            <button onClick={ () => { setOffset( offset + limit ); setLoading( true ) }}>Siguiente</button>
        </div>
  )
}
