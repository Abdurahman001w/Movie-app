import {KEY} from '../../key';
import { customAction } from "../store/reducer";

export const asyncFetch = (name) => {
    const URL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}&page=1`;
    const props = {
        method: 'GET',
        headers: {
            'X-API-KEY': KEY,
            'Content-Type': 'application/json',
        },
    }
    
    return (dispatch) => {
        fetch(URL, props)
        .then(response => response.json())
        .then(data => dispatch(customAction(data)))
        .catch(error => console.error('Error fetching data:', error));
    };
};