

export const ComicPreview = ({ comic }) => {
  return (
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4">
        {
            ( comic.images[0] )
            ? <img src={ comic.images[0].path + '.' + comic.images[0].extension } alt="" />
            : <img src="../../public/assets/images/image-not-found.png" alt="No image" className="w-full"/>
        }
        <p>{ comic.title }</p>
        

    </div>
  )
}
