import { useNavigate } from "react-router"


export const SeriesInfo = () => {
    const navigate = useNavigate()
    const navigateBack = () => navigate(-1)

  return (
    <div>
        <button onClick={ navigateBack }>BACK</button>                  
        <p>
            En el contexto de Marvel Comics, las &#34;series&#34; se refieren a las publicaciones periódicas de cómics que cuentan las historias de los personajes y equipos del universo de Marvel. Cada serie está dedicada a un personaje o grupo específico y se publica de forma regular en entregas periódicas. Estas entregas suelen ser conocidas como &#34;números&#34; o &#34;issues&#34; en inglés
        </p>
        <p>
            Las series de Marvel pueden ser protagonizadas por personajes icónicos como Spider-Man, Iron Man, Thor, Capitán América, Hulk, entre muchos otros, o por equipos como los X-Men, los Vengadores, los Cuatro Fantásticos, entre otros.
        </p>
        <p>
            Algunas características importantes de las series de Marvel son:
        </p>
        <ol>
            <li>
                Número de serie: Cada serie tiene un número específico que se utiliza para identificarla. Por ejemplo, &#34;The Amazing Spider-Man #1&#34; es el primer número de la serie &#34;The Amazing Spider-Man&#34;.
            </li>
            <li>
                Arco argumental: Las series suelen contar una historia continua a lo largo de varios números, y estas historias más extensas se denominan &#34;arcos argumentales&#34; o &#34;storylines&#34;. Estos arcos pueden abarcar desde unos pocos números hasta varios volúmenes de la serie.
            </li>
            <li>
                Crossovers y eventos: Algunas veces, las series individuales se cruzan con otras series o participan en eventos mayores conocidos como &#34;crossovers&#34; o &#34;events&#34;. Estos eventos suelen involucrar a múltiples personajes y títulos de cómics y pueden tener un impacto significativo en el universo Marvel en general.
            </li>
            <li>
                Equipo creativo: Cada serie está escrita y dibujada por un equipo creativo compuesto por escritores, artistas y otros colaboradores que trabajan en la realización de los cómics.
            </li>
        </ol>

        <p>
            Las series de Marvel han sido una parte fundamental del legado de la editorial, permitiendo a los lectores sumergirse en las aventuras y hazañas de sus personajes favoritos y seguir sus historias a lo largo del tiempo. A lo largo de los años, muchas series han sido canceladas y relanzadas con nuevos números, lo que crea diferentes volúmenes de una misma serie, pero todas contribuyen a la rica historia y mitología del universo Marvel.
        </p>

    </div>
  )
}
