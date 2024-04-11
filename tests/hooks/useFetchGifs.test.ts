import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGifs } from '../../src/hooks/useFecthGifs';


describe('Pruebas en CustomHook useFetchGifs', () => { 
    
    // Test #1: Sobre el estado inicial del CustomHook.
    test('Debe de regresar el estado inicial', () => {
        
        // Renderizamos el custom Hook y desestructuramos el result.
        const { result } = renderHook( () => useFecthGifs('One Punch') );
        // Desestructuramos el contenido del result.
        const { images, isLoading } = result.current;

        // Esperamos que el tamaño del arreglo de imagenes sea 0.
        expect( images.length ).toBe( 0 );
        // Esperamos que el valor de isLoading sea verdadero.
        expect( isLoading ).toBeTruthy();
    });

    // Test #2: Sobre el estado actualizado del CustomHook.
    test('Debe retornar un arreglo de images y isLoading en false', async() => { 

        // Renderizamos el custom Hook y desestructuramos el result.
        const { result } = renderHook( () => useFecthGifs('One Punch') );
        
        // Usamos la funcion waitFor para experar a que cambie el estado del hook 
        await waitFor(
            // Condicion de expera: 
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
        );

        // Desestructuramos el contenido del result.
        const { images, isLoading } = result.current;

        // Esperamos que el tamaño del arreglo de imagenes sea mayor que 0.
        expect( images.length ).toBeGreaterThan(0);
        // Esperamos que el valor de isLoading sea falso.
        expect( isLoading ).toBeFalsy();
    });
}) 