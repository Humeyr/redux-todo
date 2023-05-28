import todoReducer from "./todoReducer";
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoState: todoReducer,
});

const store = createStore(rootReducer);

export default store;