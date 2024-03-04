// Types.
import {Gifs} from "../Types/types";

export const getGifs = async( category: string ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TGdsdGDF22Dy5Go2l12sGtwGycstQY35&q=${ category }&limit=5`;
    
    const response = await fetch( url );
    const { data }: Gifs = await response.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
}