import { getGifs } from '../../src/Helpers/getGifs';


describe('Pruebas en getGifs()', () => { 

    //test #1: Se declara async porque La funcion es asincrona. 
    test('Debe retornar un arreglo de gifs', async() => {

        const gifs = await getGifs( 'One Punch' );

        // Experamos que el arreglo de gifs sea mayor que 0.
        expect( gifs.length ).toBeGreaterThan( 0 );

        // Esperamos que el primer objeto del arreglo tenga las siguientes propiedades.
        expect( gifs[0] ).toEqual({
            
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    });
 })