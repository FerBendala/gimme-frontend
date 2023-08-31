import { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from '../../redux/reducers/login-reducer'

import Button from '../button/button.component'

import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'

import styles from './header-dropdown.module.scss'

const HeaderDropdown = () => {
    const user = useSelector( state => state.login )
    const [openDropdown, setOpenDropdown] = useState( false )

    const dispatch = useDispatch()
    const dropdownRef = useRef( null )

    useEffect( () => {
        document.addEventListener( 'mousedown', handleClickOutside )
        return () => {
            document.removeEventListener( 'mousedown', handleClickOutside )
        }
    }, [] )

    // Switch dropdown panel
    const handleDropdown = () => {
        setOpenDropdown( !openDropdown )
    }

    // Close dropdown when click outside
    const handleClickOutside = ( event ) => {
        if ( dropdownRef.current && !dropdownRef.current.contains( event.target ) ) {
            setOpenDropdown( false )
        }
    }

    // Set undefined value to username when click logout
    const logout = () => {
        dispatch( resetUser( undefined ) )
    }

    if ( !user.username ) {
        return null
    }

    return (
        <div
            className={styles['dropdown']}
            ref={dropdownRef}
        >
            {/* Dropdown button */}
            <Button
                picture={user.picture && user.picture}
                Icon={!user.picture && AccountCircleRoundedIcon}
                text={user.username}
                handleAction={handleDropdown}
            />

            {/* Dropdown panel list */}
            <ul className={openDropdown
                ? [styles['dropdown__list'], styles['open']].join( ' ' )
                : styles['dropdown__list']
            }>
                <li className={styles['dropdown__list__item']}>
                    <figure className={styles['item__user']}>
                        {user.picture
                            ? <img src={user.picture} alt={user.username} className={styles['item__user__image']} />
                            : <AccountCircleRoundedIcon className={styles['item__user__icon']} />
                        }

                        <figcaption className={styles['item__user__name']}>{user.username}</figcaption>
                    </figure>
                </li>
                <li className={styles['dropdown__list__item']}>
                    <button
                        onClick={logout}
                        className={styles['item__button']}
                    >
                        <PowerSettingsNewRoundedIcon className={styles['item__button__icon']} />
                        <span className={styles['item__button__text']}>Loggout</span>
                    </button>
                </li>
                <li className={styles['dropdown__list__item']}>
                    <button className={styles['item__button']}>
                        <SettingsRoundedIcon className={styles['item__button__icon']} />
                        <span className={styles['item__button__text']}>Settings</span>
                    </button>
                </li>
            </ul>
        </div >
    )
}

export default HeaderDropdown