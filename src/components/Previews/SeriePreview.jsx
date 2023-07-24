


export const SeriePreview = ({ serie }) => {
    console.log(serie)
    return (
      <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4">
         
        <img src={ serie.thumbnail.path + '.' + serie.thumbnail.extension } alt="" />
        
        <h3>{ serie.title }</h3>

        <p>{ serie.description }</p>
        <p>Start year: { serie.startYear }</p>
        <p>End year: { serie.endYear }</p>
  
          
  
      </div>
    )
  }
  