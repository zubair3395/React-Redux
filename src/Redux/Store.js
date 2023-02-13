import {createStore} from 'redux';
import { cartReducer } from './Reducer';
export const store= createStore(cartReducer);