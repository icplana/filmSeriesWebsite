import { useState } from "react"
import { LimitOffsetContext } from "./LimitOffsetContext"

export const LimitOffsetProvider = ({ children }) => {

    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)

  return (
    <LimitOffsetContext.Provider value={{ limit, setLimit, offset, setOffset, loading, setLoading }}>
        { children }
    </LimitOffsetContext.Provider>
  )
}
