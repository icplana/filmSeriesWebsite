import { baseUrl, publicKey } from "./APIdata";



const resp = await fetch( `${ baseUrl }v1/public/comics?apikey=${ publicKey }&limit=100` )

export const seriesData = await resp.json()
