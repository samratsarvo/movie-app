import {createStore , combineReducers} from 'redux'
import movieReducer from '../reducers/movieReducers'

export default function configureStore(){
    
    
    const store = createStore(combineReducers({
        movie : movieReducer
    }))
    return store 
}