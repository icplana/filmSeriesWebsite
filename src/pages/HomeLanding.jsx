import { Link } from "react-router-dom"


export const HomeLanding = () => {
  return (
    <div className="mt-5 ml-2">
        <h1 className="text-3xl mb-3">Welcome!</h1>

        <p className="mb-3 text-lg">If you are here probably you are interested in knowing more about Marvel.</p>

        <p className="mb-3">
            Marvel is a fantasy universe that is made known through comics and movies.
            There are currently more than 55,000 comics! (according to Marvel API).
            On this website you can search through all of them.
        </p>
    
        <p>Also you will be able to:</p>
        <ul>
            <li>
                <span className="font-bold">Filter by character.</span> If there is a character that you like you will be able to get a lot of information about him/her such as all the comics where him/her appears.
            </li>

            <li>
                    <span className="font-bold">Filter by comic.</span> If there is a comic that you like you will be able to get a lot of information such as the creator of the comic or the characters that appear in that comic.
            </li>

            <li>
                    <span className="font-bold">Filter by creator.</span> If there is a creator that you like you will be able to find information such as all the comics where she/he contributed.
            </li>

            <li>
                <span className="font-bold">Filter by events.</span> If there is an event that you like you will be able to get information such as the creators that contributed or the characters that appear in that event.
                
                CREAR LINK CON ---- Los eventos son historias que involucran a múltiples personajes y títulos de cómics, y generalmente tienen un impacto significativo en la continuidad del universo Marvel. Por ejemplo: &#34; Infinity Gauntlet &quot; : Donde Thanos reúne las Gemas del Infinito y se convierte en una entidad todopoderosa.
            </li>

            <li>
                <span className="font-bold">Filter by series.</span> 
                If there is a series that you like you will be able to find information such as creators that contributed or characters that appear in that serie.
                <Link to="/seriesinfo">More info about the series.</Link>                 
            </li>

            <li>
                <span className="font-bold">Filter by stories</span> Las stories son bla bla bla...
            </li>
        </ul>
          
        



       
    </div>
  )
}
