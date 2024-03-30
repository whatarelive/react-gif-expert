import { useState } from "react"

export const useCategory = ( newcategory: string ) => {

    // Estado que contiene el listado de las categorias de los gifs.
    const [ categories, setCategories ] = useState( [newcategory] )

    // Funcion que agrega una nueva categoria al estado inicial.
    const onAddCategory = ( newCategory: string ) => {
        
        // Validacion para saber si la nueva categoria no se encuentra del useState.
        if( !categories.includes( newCategory ) ) {
            setCategories([ newCategory, ...categories])
        }
    }

    return {
        categories,
        onAddCategory
    }
}