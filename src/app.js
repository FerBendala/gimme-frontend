import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Layout from './layout/layout'

import Home from './pages/home'
import Login from './pages/login'
import PageNotFound from './pages/page-not-found'

import './assets/scss/index.scss'

const App = () => {
    const username = useSelector( ( state ) => state.login.username )
    const navigate = useNavigate()

    const userIsLogged = username.length > 0

    useEffect( () => {
        if ( !userIsLogged ) navigate( '/login' )
    }, [userIsLogged, navigate] )

    return (
        <section className='container'>
            <Routes>
                {/* App */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>

                {/* Login page */}
                <Route path='login' element={<Login />} />
            </Routes>
        </section>
    )
}

export default App
