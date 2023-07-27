import { useState } from "react"
import { LimitOffsetContext } from "./LimitOffsetContext"

export const LimitOffsetProvider = ({ children }) => {

    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

  return (
    <LimitOffsetContext.Provider value={{ limit, setLimit, offset, setOffset, loading, setLoading, error, setError }}>
        { children }
    </LimitOffsetContext.Provider>
  )
}
