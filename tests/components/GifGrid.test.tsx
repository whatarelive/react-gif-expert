/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";

// Creamos un mock personalizado del customHook.
jest.mock("../../src/hooks/useFecthGifs");

describe('Pruebas en el componente <GifGrid/>', () => {

    // Variable auxiliar
    const category = "One Punch";

    // Test #1: Sobre la UI inicial del componente
    test('Snapshot del componente', () => { 

        // Definimos el valor de retorno de nuestro CustomHook
        (useFecthGifs as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true
        })

        // Renderizamos el componente y guardamos el render.
        const { container } = render( <GifGrid category={ category }/>);

        // Creamos una captura del componente.
        expect( container ).toMatchSnapshot();
    })
    
    
    // Test #2: Sobre el mensaje de Carga.
    test('debe mostrar el loading inicialmente', () => {
        
        // Definimos el valor de retorno de nuestro CustomHook
        (useFecthGifs as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true
        });

        // Renderizamos el componente
        render( <GifGrid category={ category }/>);

        // Esperamos que se muestre un elemento con el texto especificado.
        expect( screen.getByText('Cargando.....') );
        expect( screen.getByText( category ) );
    })


    // Test #3: Sobre la visibilidad de la lista de gifs.
    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        // Creamos un arreglo auxiliar de elementos a mostrar.
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'    
            }
        ];

        // Definimos el valor de retorno de nuestro CustomHook
        (useFecthGifs as jest.Mock).mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        // Renderizamos el componente.
        render( <GifGrid category={ category }/>);
        
        // Esoeramos que halla dos elementos de tipo imagen en el HTML.
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})