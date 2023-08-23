import { Outlet } from 'react-router-dom'
import './layout.scss'
import Header from '../components/header/header.component'

const Layout = () => {
    return (
        <>
            <Header />
            <main className='main'>
                {/* Load content */}
                <Outlet />
            </main>
        </>
    )
}

export default Layout
