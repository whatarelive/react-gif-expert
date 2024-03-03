// Librerias de React.
import React, {useState} from "react";
// Types.
import {AddCategoryProps} from "../Types/types";


export const AddCategory = ( { onNewCategory }: AddCategoryProps ) => {

    // Hook useState : permite dal un estado al texto del input.
    const [ inputValue, setInputValue ] = useState( String );

    // Funcion para extraer el texto del input y guardarlo en el useState.
    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setInputValue( target.value );

    // Funcion que enviar el valor de la nueva categoria al componente padre.
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const text = inputValue.trim();
        
        if( text.length > 0 ) {
            onNewCategory( text );
            setInputValue('');
        }
    };

    // Renderizado del componente.
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
};