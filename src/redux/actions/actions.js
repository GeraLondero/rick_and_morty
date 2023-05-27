import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./action.type.js";
import axios from "axios"

export const addFavorite = char => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       const response = await axios.post(endpoint, char)
          return dispatch({
             type: ADD_FAVORITES,
             payload: response.data,
          });
        } 
 };


/*export function deleteFavorite(id){ // actions 
    
    return{
        type: DELETE_FAVORITES,
        payload: id,
    }

}*/
export const deleteFavorite = id => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        const response = await axios.delete(endpoint)
           return dispatch({
              type: DELETE_FAVORITES,
              payload: response.data,
           });
         } 
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
