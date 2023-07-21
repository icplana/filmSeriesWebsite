import { baseUrl, publicKey } from "./APIdata";



const resp = await fetch( `${ baseUrl }v1/public/comics?apikey=${ publicKey }&limit=100` )

export const comicsData = await resp.json()


export const getAllComicsBySteps = async ( ) => {
    
    const offset = 0
    const limit = 20

    const resp = await fetch( `${ baseUrl }v1/public/comics?apikey=${ publicKey }&limit=${ limit }&offset=${ offset }` )
    const data = await resp.json()

    return data
}
