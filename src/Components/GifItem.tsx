import { GifType } from "../Types/types"

export const GifItem = ( { title, url }: GifType ) => {

    return (
         <div className="card-item">          
            <img src={ url } alt={ title } /> 
            <p>{ title }</p>
        </div>      
    )
}
