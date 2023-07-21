import { Link } from "react-router-dom"


export const HomeLanding = () => {
  return (
    <div>
        <h1>Bienvenidx!</h1>

        <p>Si estas por aquí probablemente quieres saber un poco de Marvel.</p>

        <p>
            Marvel es un universo de fantasía que se da a conocer a través comics y películas.
            Actualmente existen más de 55.000 comics! (según Marvel API).

            En esta web podrás buscar a través de todos ellos.
            <ul>
                <li>
                    <span>Podras filtrar por personajes.</span> Si hay algún personaje que te gusta mucho podrás obtener información de él tal y como en cuantos comics aparece o de que series forma parte.
                </li>

                <li>
                     <span>Podras filtrar por cómics.</span> Si hay algún cómic en concreto que te guste mucho podrás buscar más información sobre este tal y como todos los personajes que salen o quién es el creador del mismo.
                </li>

                <li>
                     <span>Podras filtrar por creador.</span> Si hay algun autor que te gusta mucho podrás obtener información sobre él tal y como todos los cómics que ha escrito.
                </li>

                <li>
                    <span>Podras buscar eventos.</span>  Los eventos son historias que involucran a múltiples personajes y títulos de cómics, y generalmente tienen un impacto significativo en la continuidad del universo Marvel. Por ejemplo: &#34; Infinity Gauntlet &quot; : Donde Thanos reúne las Gemas del Infinito y se convierte en una entidad todopoderosa.
                </li>

                <li>
                    <span>Podras buscar series.</span> <Link to="/seriesinfo">Más información sobre las series.</Link>                 
                </li>

                <li>
                    <span>Podras buscar stories</span> Las stories son bla bla bla...
                </li>
            </ul>
          
        </p>



       
    </div>
  )
}
