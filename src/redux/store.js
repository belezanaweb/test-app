import { createStore } from 'redux';
import reducer from './reducer';
import { itens } from '../utils/globalVariables';

const store = createStore(reducer, itens);

export default store;
