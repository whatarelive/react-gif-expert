/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { GifItem } from '../../src/Components';
import React from "react";


describe('Pruebas en el componente <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitam.png';

    test('debe de hacer match con el snapshot', () =>{

        const { container } = render( <GifItem  title={title} url={url} id={""} />);
        expect( container ).toMatchSnapshot();

    });

});