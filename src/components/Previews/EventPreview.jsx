


export const EventPreview = ({ event }) => {
  
  return (
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4" >
        <img src={ event.thumbnail.path + '.' + event.thumbnail.extension } alt={ event.fullName + "image" } />
        <h2>{ event.title }</h2>  
        <p>{ event.description }</p>


        <p>From this event:</p>
        <ul>
            <li>{ event.comics.available } comics</li>
            <li>{ event.characters.available } characters</li>
            <li>{ event.series.available } series</li>
            <li>{ event.creators.available } creators</li>
            <li>{ event.stories.available } stories</li>
        </ul>
    </div>
  )
}
