import { useContext } from "react"
import { LimitOffsetContext } from "../contexts/limit-offset/LimitOffsetContext"
import { Link, useNavigate } from "react-router-dom"


export const Error = () => {

  const { setError } = useContext( LimitOffsetContext )

  const onBack = () => {
    setError( false )
  }

  return (
    <div className="text-center text-4xl my-8">
      Error: page not found
    <Link to="/" onClick={ onBack } className="block w-fit rounded-md mt-5 mx-auto text-2xl px-2 py-1 font-semibold bg-white">Back</Link>
    </div>
  )
}
