import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, RESET } from "../actions/action.type.js"

const  initialState = {
    myFavorites:[],
    allCharacters:[]
  
}

 export default function rootReducer(state=initialState, {type, payload}){
    switch (type) {
        case ADD_FAVORITES:
            return {
             ...state, myFavorites:
             payload, allCharacters: payload
            }
            
        case DELETE_FAVORITES:
              return{
                ...state, myFavorites: payload
              }
        case FILTER: 
        const filterCopy = [...state.allCharacters]
        const filter = filterCopy.filter((ch) => ch.gender === payload)
               return {
               ...state,
                myFavorites: filter
              }
         case ORDER:
          const orderCopy = [...state.allCharacters]; 
          console.log("payload", payload); 
          const order = orderCopy.sort((a,b) => {
            if (a.id > b.id) {
              return "Ascendente" === payload ? 1 : -1; 
            }
            if (a.id < b.id) {
              return "Descendente" === payload ? 1 : -1; 
            }
            return 0; 
          }); 
          return {
            ...state,
            myFavorites: order, 

          }
          case RESET:
            return {
             ...state,
             myFavorites: [...state.allCharacters],
            }
    
        default:
            return state
            
    }

}

