import { useState } from 'react'

import loginService from '../services/login'

const Login = () => {
    const [username, setUsername] = useState( 'fer' )
    const [password, setPassword] = useState( '1234' )

    const handleLogin = async ( event ) => {
        event.preventDefault()

        try {
            const validUser = await loginService.login( { username, password } )
            // Set user session
            console.log( validUser )

            // Set the token for the user to be able to manage their own posts
            alert( `Hello ${validUser.username}! Nice to have you here` )
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