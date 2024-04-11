import { renderHook, act } from '@testing-library/react';
import { useCategory } from '../../src/hooks/useCategory';


describe('Pruebas en el customHook useCategory', () => {
    
    // Test #1: Sobre el estado inicial del customHook.
    test('debe retornar el estado inicial', () => {

        // Renderizamos el customHook y desestructuramos el result.
        const { result } = renderHook( () => useCategory('One Punch') );

        // Desestructuramos el arreglo de categorias del result.
        const { categories } = result.current;

        // Esperamos que el tamaño del arreglo de categorias sea 1.
        expect( categories.length ).toBe( 1 );
        // Esperamos que la 1ra categoria sea el parametro inicial. 
        expect( categories ).toEqual(['One Punch']);
    });


    // Test #2: Sobre el estado actualizado del customHook cuando se le pasa un valor que no existe
    test('debe agregar el nuevo elemento al arreglo de imagenes', () => { 

        // Renderizamos el customHook y desestructuramos el result.
        const { result } = renderHook( () => useCategory('One Punch')); 
        
        // Usamos la funcion act, para realizar una actuaizacion del estado del hook.
        act( () => {
            result.current.onAddCategory('Marvel');
        });
      
        // Desestructuramos el arreglo de categorias del result.
        // Esto se tiene que hacer despues de haber actualizado el estado.
        const { categories } = result.current;

        // Esperamos que tamaño del arreglo de categorias sea 2.
        expect( categories.length ).toBe(2);
        // Esperamos que el arreglo de categorias tenga la siguiente estructura.
        expect( categories ).toEqual( ['Marvel', 'One Punch'] );
    });


    // Test #3: Sobre el estado actualizado del customHook cuando se le pasa un valor que si existe
    test('debe agregar el nuevo elemento al arreglo de imagenes', () => { 

        // Renderizamos el customHook y desestructuramos el result.
        const { result } = renderHook( () => useCategory('One Punch')); 
        
        // Usamos la funcion act, para realizar una actuaizacion del estado del hook.
        act( () => {
            result.current.onAddCategory('One Punch');
        });
      
        // Desestructuramos el arreglo de categorias del result.
        // Esto se tiene que hacer despues de haber actualizado el estado.
        const { categories } = result.current;

        // Esperamos que tamaño del arreglo de categorias NO sea mayor que 1.
        expect( categories.length ).not.toBeGreaterThan(1);
        // Esperamos que el arreglo de categorias tenga la siguiente estructura.
        expect( categories ).toEqual( ['One Punch'] );
    })
});