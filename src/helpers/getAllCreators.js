import { baseUrl, publicKey } from "./APIdata";



const resp = await fetch( `${ baseUrl }v1/public/creators?apikey=${ publicKey }&limit=100` )

export const creatorsData = await resp.json()