import { useContext, useRef } from "react";
import { LimitOffsetContext } from "../contexts/limit-offset/LimitOffsetContext";


export const ShowPerPage = () => {

    const { limit, setLimit, offset, setOffset, setLoading } = useContext( LimitOffsetContext )

    const showPerPage = useRef()

  return (
    <div className="flex w-full justify-around" >
      <div className="flex justify-start">
        <p className="mr-2 text-lg">
          Show per page:
        </p>
        <select className="rounded" ref={ showPerPage } onChange={() => { setLoading(true); setLimit(showPerPage.current.value) }} >
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
        </select>
      </div>
      <div className="flex gap-4">
        <button className="px-2 py-1 bg-white rounded-md" onClick={ () => { setLoading(true); setOffset( offset - limit )    }}>Anterior</button>
        <button className="px-2 py-1 bg-white rounded-md" onClick={ () => { setLoading(true); setOffset( offset + limit )  }}>Siguiente</button>
      </div>
        </div>
  )
}
