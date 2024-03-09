import React from "react";
import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/Components';


describe('Pruebas en el componente <GifItem />', () => {

    // Elementos Random para probar.
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitam.png';

    // Test #1 : Sobre la UI del componente.
    test('debe de hacer match con el snapshot', () =>{
    
        // Se guarda el contenido del render del componente.
        const { container } = render( <GifItem  title={title} url={url} id={""} />);
        
        // Se crea una captura del elemento renderizado.
        expect( container ).toMatchSnapshot();
    });


    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title={ title } url={ url } id="" />);
        
        // Nos permite ver el render del componente en la consola.
        //screen.debug();  

        // Desetructuracion del HTMLimageELement.
        const { src, alt } = screen.getByRole('img') as HTMLImageElement;

        // Experamos que el src sea igual al url.
        expect( src ).toBe( url );
        // Experamos que el alt sea igual al title.
        expect( alt ).toBe( title );
    });

    test('', () => {

    });
});