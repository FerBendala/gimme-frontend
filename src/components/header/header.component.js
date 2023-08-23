import { Link } from 'react-router-dom'
import HeaderDropdown from '../dropdown/dropdown.component'

import './header.component.scss'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>
                <Link to='/' className='header__title__link' >
                    Modulo económico - Supermercados
                </Link>
            </h1>
            <div className='header__user'>
                <HeaderDropdown />
            </div>
        </header >
    )
}

export default Header