import { useState } from 'react'

import loginService from '../services/login'

import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducers/login-reducer'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState( 'fer' )
    const [password, setPassword] = useState( '1234' )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async ( event ) => {
        event.preventDefault()

        try {
            // Set user session
            const validUser = await loginService.login( { username, password } )
            dispatch( setUser( validUser.username ) )


            alert( `Hello ${validUser.username}! Nice to have you here` )
            navigate( '/' )
        } catch ( error ) {
            alert( 'Wrong username or password' )
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <fieldset>
                <legend>Login</legend>
                <label htmlFor='username'>
                    <span>username</span>
                    <input
                        id='username'
                        name='username'
                        type='text'
                        value={username}
                        onChange={( { target } ) => setUsername( target.value )}
                    />
                </label>
                <label htmlFor='password'>
                    <span>password</span>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={password}
                        onChange={( { target } ) => setPassword( target.value )}
                    />
                </label>
                <button
                    id='button-submit'
                    type='submit'
                >
                    login
                </button>
            </fieldset>
        </form>
    )
}

export default Login