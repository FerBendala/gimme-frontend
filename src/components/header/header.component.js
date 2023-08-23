import { Link } from 'react-router-dom'
import HeaderDropdown from '../dropdown/dropdown.component'

import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['header__container']}>
                <h1 className={styles['header__title']}>
                    <Link to='/' className={styles['header__title__link']} >
                        Modulo económico - Supermercados
                    </Link>
                </h1>
                <div className={styles['header__user']}>
                    <HeaderDropdown />
                </div>
            </div>
        </header>
    )
}

export default Header