import {applyMiddleware,combineReducers,legacy_createStore as createStore} from 'redux'

import { todoReducer } from './reduces/todo.reduce'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({todoReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store