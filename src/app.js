import { Routes, Route } from 'react-router-dom'

import Layout from './layout/layout'

import Home from './pages/home'
import Login from './pages/login'

import './assets/scss/index.scss'
import PageNotFound from './pages/page-not-found'

const App = () => {
    return (
        <section className='container'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path='login'
                        element={<Login />}
                    />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </section>
    )
}

export default App
