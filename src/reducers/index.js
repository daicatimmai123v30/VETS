import { combineReducers} from 'redux'
import userReducer from './userReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    user:userReducer
})
const persistConfig = {
    key:'root',
    storage,
    whitelist:['user']
}
export default persistReducer(persistConfig,rootReducer);