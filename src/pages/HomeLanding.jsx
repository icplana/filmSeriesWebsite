import { Link } from "react-router-dom"


export const HomeLanding = () => {

    const scrollTo0 = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
          })
    }
  return (
    <div className="mt-5 ml-2 mb-10 px-2">
        <h1 className="text-3xl mb-3 font-bold ">Welcome to learning <span className="text-red animate-bounce inline-block">MARVEL</span></h1>

        <p className="mb-3 text-lg italic">If you are here probably you are interested in knowing more about <span className="text-red ">Marvel</span>.</p>

        <div className="mb-4">
            <p className="max-w-md mx-auto my-6 border-dotted border-white border-2 p-3 rounded-md hover:scale-105 hover:bg-white hover:font-semibold hover:text-primaryWhite">
                Marvel is a fantasy universe that is made known through comics and movies.
                There are currently more than 55,000 comics! (according to Marvel API).
                On this website you can search through all of them.
            </p>
        </div>
    
        <p className="text-3xl font-light text-center mb-5">Also you will be able to:</p>
        <ul className="flex gap-5 flex-wrap justify-center">
            <li className="sm:w-full md:w-1/3 lg:w-1/4 mb-2 rounded-md border-black border-2 px-3 py-2 hover:scale-110 hover:text-primaryWhite hover:bg-white2 hover:border-none">
                <p className="font-semibold">Filter by character.</p> 
                <p>
                    If there is a character that you like you will be able to get a lot of information about him/her such as all the comics where him/her appears.
                </p>
            </li>

            <li className="sm:w-full md:w-1/3 lg:w-1/4 mb-2 rounded-md border-black border-2 px-3 py-2 hover:scale-110 hover:text-primaryWhite hover:bg-white2 hover:border-none">
                    <p className="font-semibold">Filter by comic.</p> 
                    <p>
                        If there is a comic that you like you will be able to get a lot of information such as the creator of the comic or the characters that appear in that comic.
                    </p>
            </li>

            <li className="sm:w-full md:w-1/3 lg:w-1/4 mb-2 rounded-md border-black border-2 px-3 py-2 hover:scale-110 hover:text-primaryWhite hover:bg-white2 hover:border-none">
                    <p className="font-semibold">Filter by creator.</p> 
                    <p>
                        If there is a creator that you like you will be able to find information such as all the comics where she/he contributed.
                    </p>
            </li>

            <li className="sm:w-full md:w-1/3 lg:w-1/4 mb-2 rounded-md border-black border-2 px-3 py-2 hover:scale-110 hover:text-primaryWhite hover:bg-white2 hover:border-none">
                <p className="font-semibold">Filter by events.</p>
                <p>
                    If there is an event that you like you will be able to get information such as the creators that contributed or the characters that appear in that event.
                </p> 
                <Link onClick = { scrollTo0 } className="underline hover:font-bold" to="/info/eventsinfo">More info about the events.</Link>
                
            </li>

            <li className="sm:w-full md:w-1/3 lg:w-1/4 mb-2 rounded-md border-black border-2 px-3 py-2 hover:scale-110 hover:text-primaryWhite hover:bg-white2 hover:border-none">
                <p className="font-semibold">Filter by series.</p>
                <p>
                    If there is a serie that you like you will be able to find information such as creators that contributed or characters that appear in that serie.
                </p>
                <Link onClick = { scrollTo0 } className="underline hover:font-bold" to="/info/seriesinfo">More info about the series.</Link>                 
            </li>

            <li className="sm:w-full md:w-1/3 lg:w-1/4 mb-2 rounded-md border-black border-2 px-3 py-2 hover:scale-110 hover:text-primaryWhite hover:bg-white2 hover:border-none">
                <p className="font-semibold">Filter by stories</p>
                <p>
                    If there is a story that you like you will be able to find information such as creators that contributed or characters that appear in that serie.
                </p>
                <Link onClick = { scrollTo0 } className="underline hover:font-bold" to="/info/storiesinfo">More info about the stories.</Link>  
            </li>
        </ul>
          
        



       
    </div>
  )
}
