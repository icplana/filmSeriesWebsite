import { Link } from "react-router-dom"


export const HomeLanding = () => {
  return (
    <div className="mt-5 ml-2">
        <h1 className="text-3xl mb-3">Bienvenidx!</h1>

        <p className="mb-3 text-lg">Si estas por aquí probablemente quieres saber un poco de Marvel.</p>

        <p className="mb-3">
            Marvel es un universo de fantasía que se da a conocer a través comics y películas.
            Actualmente existen más de 55.000 comics! (según Marvel API).
            En esta web podrás buscar a través de todos ellos.
        </p>
    
        <ul>
            <li>
                <span className="font-bold">Podras filtrar por personajes.</span> Si hay algún personaje que te gusta mucho podrás obtener información de él tal y como en cuantos comics aparece o de que series forma parte.
            </li>

            <li>
                    <span className="font-bold">Podras filtrar por cómics.</span> Si hay algún cómic en concreto que te guste mucho podrás buscar más información sobre este tal y como todos los personajes que salen o quién es el creador del mismo.
            </li>

            <li>
                    <span className="font-bold">Podras filtrar por creador.</span> Si hay algun autor que te gusta mucho podrás obtener información sobre él tal y como todos los cómics que ha escrito.
            </li>

            <li>
                <span className="font-bold">Podras buscar eventos.</span>  Los eventos son historias que involucran a múltiples personajes y títulos de cómics, y generalmente tienen un impacto significativo en la continuidad del universo Marvel. Por ejemplo: &#34; Infinity Gauntlet &quot; : Donde Thanos reúne las Gemas del Infinito y se convierte en una entidad todopoderosa.
            </li>

            <li>
                <span className="font-bold">Podras buscar series.</span> <Link to="/seriesinfo">Más información sobre las series.</Link>                 
            </li>

            <li>
                <span className="font-bold">Podras buscar stories</span> Las stories son bla bla bla...
            </li>
        </ul>
          
        



       
    </div>
  )
}
