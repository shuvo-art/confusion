import { createStore } from 'redux';
import { Reducer, initialState } from './ruducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}