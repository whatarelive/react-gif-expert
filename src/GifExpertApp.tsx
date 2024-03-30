// Librerias de React.
// Componentes hijos.
import { AddCategory, GifGrid } from "./Components";
import { useCategory } from "./hooks/useCategory";


export const GifExpertApp = () => {

    // Custom Hook: que devuelve el Estado que contiene el listado de las categorias de los gifs.
    const {categories, onAddCategory}  = useCategory('One Punch')

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