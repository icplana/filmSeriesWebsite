

export const ComicPreview = ({ comic }) => {
  return (
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4">
        {
            ( comic.images[0] )
            ? <img src={ comic.images[0].path + '.' + comic.images[0].extension } alt="" />
            : <img src="../../assets/images/image_not_available.jpg" alt="No image" className="w-full"/>
        }
        <h3>{ comic.title }</h3>

        <p>{ comic.description }</p>

        <div>
          {
            comic.creators.items.length > 0
            ? <p>Creators:</p>
            :''
          }
          <ul>          
          {
            comic.creators.items.map( creator => (
              <li key={ creator.name }>
                { creator.name } ({ creator.role })
              </li>
            ))
          }
          </ul>
        </div>
        

    </div>
  )
}
