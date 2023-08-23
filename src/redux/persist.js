import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducers/login-reducer'

const persistConfig = {
    key: 'login',
    storage,
}

const persistedLoginReducer =
    persistReducer( persistConfig, userReducer )

export { persistedLoginReducer }
