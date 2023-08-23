import { configureStore } from '@reduxjs/toolkit'
import { persistStore, REHYDRATE, PERSIST } from 'redux-persist'
import { persistedLoginReducer } from './persist'
import globalReducer from './reducers/global-reducer'

const rootReducer = {
    global: globalReducer,
    login: persistedLoginReducer
}

const store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            serializableCheck: {
                ignoredActions: [PERSIST, REHYDRATE],
            },
        } ),
} )

const persistor = persistStore( store )

export { store, persistor }
