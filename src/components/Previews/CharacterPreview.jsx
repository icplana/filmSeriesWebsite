

export const CharacterPreview = ({ character }) => {

    
  return (
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4" >
        <img src={ character.thumbnail.path + '.' + character.thumbnail.extension } alt={ character.name + "image" } />
        <h2>{ character.name }</h2>  
        <p>{ character.description }</p>

        <p>Appears on:</p>
        <ul>
            <li>{ character.comics.available } comics</li>
            <li>{ character.series.available } series</li>
            <li>{ character.events.available } events</li>
            <li>{ character.stories.available } stories</li>
        </ul>    
        
    </div>
  )
}
