import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Layout from './layout/layout'

import Home from './pages/home.page'
import Login from './pages/login.page'
import PageNotFound from './pages/not-found.page'

import './assets/scss/index.scss'
import SignIn from './pages/signin.page'

const App = () => {
    const user = useSelector( ( state ) => state.login.username )
    const navigate = useNavigate()

    useEffect( () => {
        const signInPage = location.pathname !== '/sign-in'
        const redirectToLogin = user === undefined && signInPage
        // Check if user is logged
        if ( redirectToLogin )
            navigate( '/login' )
    }, [user, navigate] )

    return (
        <Routes>
            {/* App */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>

            {/* Allow access to sign-in */}
            <Route path='sign-in' element={<SignIn />} />

            {/* Login */}
            <Route path='login' element={<Login />} />
        </Routes>
    )
}

export default App
