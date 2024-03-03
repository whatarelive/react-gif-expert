// Hooks de React
import { useEffect, useState } from "react";
// API Helpers.
import { getGifs } from "../Helpers/getGifs";
// Types
import { GifType } from "../Types/types"


export const useFecthGifs = ( category: string ) => {

    // Hook useState : permite dal un estado del arreglo de elementos.
    const [ images, setImages ] = useState( Array<GifType> );

    const [ isLoading, setIsLoading ] = useState( true );

    // Funcion para recuperar el arreglo de gifs y guardarlos en el useState. 
    const getImages = async( category: string ) => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    // Hook UseEffect : permite que solo se llame a la funcion cuando halla un cambio en las categorias.
    useEffect( () => {
        getImages( category );

    }, [category])

    return {
        images,
        isLoading,
    }
}
