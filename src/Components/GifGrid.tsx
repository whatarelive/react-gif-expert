// Custom Hook
import { useFecthGifs } from "../hooks/useFecthGifs";
// Componetes
import { GifItem } from "./index";
// Types.
import {GifGridProps} from "../Types/types";


export const GifGrid = ({ category }: GifGridProps ) => {

    const { images, isLoading } = useFecthGifs( category );
    
    // Renderizado del componente.
    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando.....</h2>)
            }

            <div className="card-grid"> 
            { 
                images.map( images => <GifItem key={ images.id } { ...images }/>)
            }
            </div> 
        </>
    );
};
