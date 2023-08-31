import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'

import { GoogleOAuthProvider } from '@react-oauth/google'

import App from './app'

// Id from google needed to authenticate
const googleClientId = '911961515007-e057kbsqh665gum92il1ibp6gijvkd9t.apps.googleusercontent.com'

const root = createRoot( document.getElementById( 'root' ) )
root.render(
    <GoogleOAuthProvider clientId={googleClientId}>
        <StrictMode>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </StrictMode>
    </GoogleOAuthProvider>
)