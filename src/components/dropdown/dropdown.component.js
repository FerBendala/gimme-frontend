import { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/reducers/login-reducer'

import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'

import './dropdown.component.scss'

const HeaderDropdown = () => {
    const username = useSelector( state => state.login.username )
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
        dispatch( setUser( undefined ) )
    }

    if ( !username ) {
        return null
    }

    return (
        <div
            className='dropdown'
            ref={dropdownRef}
        >
            {/* Dropdown button */}
            <button
                onClick={handleDropdown}
                className='dropdown__button'
            >
                <AccountCircleRoundedIcon className='dropdown__button__logo' />
                <span className='dropdown__button__name'>{username}</span>
            </button>

            {/* Dropdown panel list */}
            <ul className={`dropdown__list ${openDropdown ? 'open' : ''}`}>
                <li className='dropdown__list__item'>
                    <button
                        onClick={logout}
                        className='item__button'
                    >
                        <PowerSettingsNewRoundedIcon className='item__button__icon' />
                        <span className='item__button__text'>Loggout</span>
                    </button>
                </li>
            </ul>
        </div >
    )
}

export default HeaderDropdown