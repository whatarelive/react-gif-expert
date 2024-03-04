// Types for Request API.
import { Datum, Meta, Pagination } from "./APItypes";

// Props Type del complemento AddCategory.
export type AddCategoryProps = {
    onNewCategory: CallableFunction,
}

// Props Type del complemento GifGrid.
export type GifGridProps = {
    category: string,
}

// Types de la request a la API de Giphy.
export type Gifs = {
    data:       Datum[];
    meta:       Meta;
    pagination: Pagination;
}

// Type de la gif-card-item.
export type GifType = {
    readonly id: string,
    readonly title: string,
    readonly url: string,
}