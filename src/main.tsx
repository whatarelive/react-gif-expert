// Librerias de React.
import React from 'react'
import ReactDOM from 'react-dom/client'
// Estilos CSS. 
import "./Styles/index.css";
// Componentes propios. 
import {GifExpertApp} from "./GifExpertApp.tsx";

const root = document.getElementById('root');

if (root instanceof HTMLDivElement) {

    ReactDOM.createRoot(root).render(
        <React.StrictMode>
                <GifExpertApp/>
        </React.StrictMode>
    );
} 