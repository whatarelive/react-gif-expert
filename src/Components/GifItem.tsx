import { GifType } from "../Types/types"

export const GifItem = ( image: GifType ) => {

    return (
         <div className="card-item">          
            <img src={ image.url } alt={ image.title } /> 
            <p>{ image.title }</p>
        </div>      
    )
}
