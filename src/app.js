import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Layout from './layout/layout'

import Home from './pages/home.page'
import Login from './pages/login.page'
import PageNotFound from './pages/not-found.page'

import './assets/scss/index.scss'

const App = () => {
    const user = useSelector( ( state ) => state.login.username )
    const navigate = useNavigate()

    useEffect( () => {
        // Check if user is logged
        if ( user === undefined )
            navigate( '/login' )
    }, [user, navigate] )

    return (
        <section className='container'>
            <Routes>
                {/* App */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>

                {/* Login */}
                <Route path='login' element={<Login />} />
            </Routes>
        </section>
    )
}

export default App
