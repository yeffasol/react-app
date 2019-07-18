import {createStore} from 'redux';
import reducer from '../reducers';

const initialState={
    username: "Marat",
    totalAmount: 2500700
};

export const store = createStore(reducer, initialState);
