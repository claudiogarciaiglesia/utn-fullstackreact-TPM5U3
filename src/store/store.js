import { contadorReducer } from "../reducers/contadorReducer";
import { createStore } from 'redux';



export const store = createStore(contadorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());