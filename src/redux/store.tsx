import thunk from 'redux-thunk';
import {combineReducers,createStore,applyMiddleware} from 'redux';

export const middlewares = [thunk];

if(process.env.MODE_ENV === 'development'){
    //
}

const rootReducer = combineReducers({
    
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;