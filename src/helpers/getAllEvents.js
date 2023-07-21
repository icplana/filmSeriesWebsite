import { baseUrl, publicKey } from "./APIdata";



const resp = await fetch( `${ baseUrl }v1/public/events?apikey=${ publicKey }&limit=100` )

export const eventsData = await resp.json()