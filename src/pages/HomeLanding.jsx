import { Link } from "react-router-dom"


export const HomeLanding = () => {
  return (
    <div className="mt-5 ml-2 mb-10">
        <h1 className="text-3xl mb-3 text-">Welcome!</h1>

        <p className="mb-3 text-lg italic">If you are here probably you are interested in knowing more about Marvel.</p>

        <p className="mb-4">
            Marvel is a fantasy universe that is made known through comics and movies.
            There are currently more than 55,000 comics! (according to Marvel API).
            On this website you can search through all of them.
        </p>
    
        <p className="underline mb-2">Also you will be able to:</p>
        <ul className="">
            <li className="mb-2">
                <p className="font-semibold">Filter by character.</p> 
                <p>
                    If there is a character that you like you will be able to get a lot of information about him/her such as all the comics where him/her appears.
                </p>
            </li>

            <li className="mb-2">
                    <p className="font-semibold">Filter by comic.</p> 
                    <p>
                        If there is a comic that you like you will be able to get a lot of information such as the creator of the comic or the characters that appear in that comic.
                    </p>
            </li>

            <li className="mb-2">
                    <p className="font-semibold">Filter by creator.</p> 
                    <p>
                        If there is a creator that you like you will be able to find information such as all the comics where she/he contributed.
                    </p>
            </li>

            <li className="mb-2">
                <p className="font-semibold">Filter by events.</p>
                <p>
                    If there is an event that you like you will be able to get information such as the creators that contributed or the characters that appear in that event.
                </p> 
                <Link className="underline" to="/info/eventsinfo">More info about the events.</Link>
                
            </li>

            <li className="mb-2">
                <p className="font-semibold">Filter by series.</p>
                <p>
                    If there is a serie that you like you will be able to find information such as creators that contributed or characters that appear in that serie.
                </p>
                <Link className="underline" to="/info/seriesinfo">More info about the series.</Link>                 
            </li>

            <li className="mb-2">
                <p className="font-semibold">Filter by stories</p>
                <p>
                    If there is a story that you like you will be able to find information such as creators that contributed or characters that appear in that serie.
                </p>
                <Link className="underline" to="/info/storiesinfo">More info about the stories.</Link>  
            </li>
        </ul>
          
        



       
    </div>
  )
}
