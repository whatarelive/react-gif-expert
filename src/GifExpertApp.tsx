// Librerias de React.
import {useState} from "react";
// Componentes hijos.
import { AddCategory, GifGrid } from "./Components";


export const GifExpertApp = () => {

    // Estado que contiene el listado de las categorias de los gifs.
    const [ categories, setCategories ] = useState(['One Punch']);

    // Funcion que agrega una nueva categoria al estado inicial.
    const onAddCategory = ( newCategory: string ) => {
        
        // Validacion para saber si la nueva categoria no se encuentra del useState.
        if ( !categories.includes( newCategory ) ) {
            setCategories([ newCategory, ...categories ]);
        }
    }

    // Funcion que crea el listado de elementos.
    const listItem = () => {
        return categories.map( ( category: string ) => {
           return <GifGrid key={ category } category={ category }/>;
        });
    }

    return (
        <>
            <h3>Gif Expert App</h3>
            <AddCategory onNewCategory={ onAddCategory }/>
            <ol>{ listItem() }</ol>
        </>
    );
};