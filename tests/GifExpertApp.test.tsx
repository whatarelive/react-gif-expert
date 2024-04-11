import React from 'react';
import { render, screen } from '@testing-library/react';
import { useCategory, useFecthGifs } from '../src/hooks';
import { GifExpertApp } from '../src/GifExpertApp';

// Creamos Mocks de los hooks necesezarios para renderizar el componente.
jest.mock('../src/hooks/useCategory');
jest.mock('../src/hooks/useFecthGifs');

describe('Pruebas del componente <GifExpertApp/>', () => { 

    // Data Auxiliar.
    const categories = ['One Punch'];
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

    // Test #1: Sobre la UI del componente cuando se carga toda la data.
    test('debe mostrar todos los elemntos de forma correcta', () => { 

        // Definimos el valor de retorno del mock del customHook useFetchGifs. 
        (useFecthGifs as jest.Mock).mockReturnValue({
            images: gifs,
            isLoading: false
        });

        // Definimos el valor de retorno del mock del customHook useCategory.
        (useCategory as jest.Mock).mockReturnValue({
            categories: categories,
        });

        // Renderizamos el componente y desetructuramos el contenido del render.
        const { container } = render(<GifExpertApp/>);

        // Esperamos que el contenido del render exitan los siguientes textos.
        expect( screen.getByText('One Punch') );
        expect( screen.getByText('Gif Expert App'));
       
        // Creamos una captura del render.
        expect( container ).toMatchSnapshot();
    });
})