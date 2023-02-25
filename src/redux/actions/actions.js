import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from "./action.type.js";


export function addFavorite(ch){ //actions 
   return {
    type: ADD_FAVORITES,
    payload: ch,
   }
    
}

export function deleteFavorite(id){ // actions 
    
    return{
        type: DELETE_FAVORITES,
        payload: id,
    }

}

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
