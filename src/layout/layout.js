import { Outlet, Link } from 'react-router-dom'
import './layout.scss'

const Layout = () => {
    return (
        <>
            <header className='header'>
                <h1 className='header__title'>
                    <Link to='/' className='header__title__link' >
                        Modulo de economia personal I
                    </Link>
                </h1>
            </header >
            <main className='main'>
                {/* Load content */}
                <Outlet />
            </main>
        </>
    )
}

export default Layout
