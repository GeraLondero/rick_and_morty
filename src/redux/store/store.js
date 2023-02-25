import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducer/reducer.js';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

//const composed = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && 
  //  window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
    
    ); 

   
   
 export default store; 