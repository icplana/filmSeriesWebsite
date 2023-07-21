import { baseUrl, publicKey } from "./APIdata";



const resp = await fetch( `${ baseUrl }v1/public/characters?apikey=${ publicKey }&limit=100` )

export const charactersData = await resp.json()