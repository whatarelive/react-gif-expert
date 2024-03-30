import React from "react";
import { render } from "@testing-library/react";
import { GifGrid } from "../../src/Components";


describe('Pruebas en el componente <GifGrid/>', () => {

    // Test #1: Sobre la UI del Componente.
    test('Snapshot del Componente',() => {

        // Se guarda el contenido del componente renderizado.
        const { container } = render(<GifGrid category="One Punch"/>);

        // Se crea una captura del elemento renderizado.
        expect( container ).toMatchSnapshot();
    });

})