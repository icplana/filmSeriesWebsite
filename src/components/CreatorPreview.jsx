

export const CreatorPreview = ({ creator }) => {
    console.log(creator)
  return (
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4" >
        <img src={ creator.thumbnail.path + '.' + creator.thumbnail.extension } alt={ creator.fullName + "image" } />
        <h2>{ creator.fullName }</h2>  
        <p>{ creator.description }</p>


        <p>This creator contriuted on:</p>
        <ul>
            <li>{ creator.comics.available } comics</li>
            <li>{ creator.series.available } series</li>
            <li>{ creator.events.available } events</li>
            <li>{ creator.stories.available } stories</li>
        </ul>
    </div>
  )
}
