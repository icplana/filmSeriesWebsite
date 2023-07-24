

export const StoryPreview = ({ story }) => {
  return (
    <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4" >

        <h2>{ story.title }</h2>  

        <p>Number of comics: { story.comics.available }</p>      
    

    </div>
  )
}
