import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/Components"

describe('Pruebas en el componente <AddCategory/>', () => { 

    // Objeto auxiliar.
    const target = { value: 'Saitama' };

    // Test #1: Sobre la UI del Componenete.
    test('Snapshot del componente', () => { 
        
        // Se guarda el contenido del componente renderizado. 
        const { container } = render(<AddCategory onNewCategory={ () => {} }/>);

        // Se crea una captura del elemento renderiazado.
        expect( container ).toMatchSnapshot();
     })

     // Test #2:  Sobre el HTMLInputElement.
     test('Debe cambiar el valor del TextInput', () => { 

        // Renderizamos el componente
        render(<AddCategory onNewCategory={ () => {} }/>);
        
        // Extraemos el input del componente renderizado.
        const input = screen.getByRole('textbox') as HTMLInputElement;

        // Disparamos el evento en el HTMLInputElement.
        fireEvent.input( input, { target });

        // El valor ingresado en el input debe ser igual al esperado.
        expect( input.value ).toBe( 'Saitama' );
     })

     // Test #3: Sobre el Formulario.
     test('deber llamar onNewCategory si el input tiene un valor', () => { 
        
        // Renderizamos el componente
        render( <AddCategory onNewCategory={ () => {} }/>);

        // Extraemos el input y el formulario del componente renderizado.
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLFormElement;

        // Disparamos el evento en el HTMLInputElement
        fireEvent.input( input, { target } );
        
        //Disparamos el eveneto onSubmit en el Formulario.
        fireEvent.submit( form );

        // Esperamos que el valor del input sea igual a un String vacio.
        expect( input.value ).toBe( '' );
      })
 })