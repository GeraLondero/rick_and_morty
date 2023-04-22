import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./action.type.js";
import axios from "axios"

export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAVORITES,
             payload: data,
          });
       });
    };
 };

/*export function deleteFavorite(id){ // actions 
    
    return{
        type: DELETE_FAVORITES,
        payload: id,
    }

}*/
export const deleteFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_FAVORITES,
             payload: data,
       });
       });
    };
 };


export function filterCards(status){ // actions 
    
    return{
        type: FILTER,
        payload: status,
    }

}

export function orderCards(id){ // actions 
    
    return{
        type: ORDER,
        payload: id,
    }

}

export function reset(){ // actions 
    
    return{
        type: RESET,
        
    }

}
