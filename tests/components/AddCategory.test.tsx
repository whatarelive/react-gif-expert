import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/Components"

describe('Pruebas en el componente <AddCategory/>', () => { 

    // Objeto auxiliar.
    const target = { value: 'Saitama' };

    // Test #1: Sobre la UI del Componenete.
    test('Snapshot del componente', () => { 
   
        // Se guarda el contenido del componente renderizado. 
        const { container } = render(<AddCategory onNewCategory={ jest.fn() }/>);

        // Se crea una captura del elemento renderiazado.
        expect( container ).toMatchSnapshot();
     })

     // Test #2:  Sobre e Input: Simular la funcion onChange
     test('Debe cambiar el valor del TextInput', () => { 
         
        // Renderizamos el componente
        render(<AddCategory onNewCategory={ jest.fn() }/>);
        
        // Extraemos el input del componente renderizado.
        const input = screen.getByRole('textbox') as HTMLInputElement;

        // Disparamos el evento en el HTMLInputElement.
        fireEvent.input( input, { target });

        // El valor ingresado en el input debe ser igual al esperado.
        expect( input.value ).toBe( 'Saitama' );
     })

     // Test #3: Sobre el Formulario: Simular la funcion onSumit con un valor.
     test('deber llamar onNewCategory si el input tiene un valor', () => {
        // Creamos una funcion usando un Mock de Jest. 
        const onNewCategory = jest.fn();  

        // Renderizamos el componente
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        // Extraemos el input y el formulario del componente renderizado.
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLFormElement;

        // Disparamos el evento en el HTMLInputElement
        fireEvent.input( input, { target } );
        
        //Disparamos el evento onSubmit en el Formulario.
        fireEvent.submit( form );

        // Esperamos que el valor del input sea igual a un String vacio.
        expect( input.value ).toBe( '' );
        // Esperamos que la funcion halla sido llamada.
        expect( onNewCategory ).toHaveBeenCalled();
        // Esperamos que la funcion solo sea llamada una sola vez.
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        // Esperamos que la funcion sea llamada con el valor de la caja de texto.
        expect( onNewCategory ).toHaveBeenCalledWith( target.value );
      })

      // Test #4: Sobre el Formulario: Simular la funcion onSubmit sin tener un valor.
      test('no debe llamar el onNewCategory si el input esta vacio', () => {

         // Se crea una funcion auxiliar usando un Mock de Jest.
         const onNewCategory = jest.fn();
         
         // Renderizamos el componente
         render(<AddCategory onNewCategory={ onNewCategory }/>)

         // Extraemos el formulario del componenete renderizado.
         const form = screen.getByRole('form') as HTMLFormElement;

         // Disparamos el evento onSubmit en el Formulario.
         fireEvent.submit( form );

         // Esperamos que la funcion no halla sido llamada ni una vez;
         //expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
         expect( onNewCategory ).not.toHaveBeenCalled();
      })
 })