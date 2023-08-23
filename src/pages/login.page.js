import { useState } from 'react'

import loginService from '../services/login'

import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducers/login-reducer'
import { useNavigate } from 'react-router-dom'

import Button from '../components/button/button.component'

import MailRoundedIcon from '@mui/icons-material/MailRounded'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'
import Input from '../components/input/input.component'


const Login = () => {
    const [username, setUsername] = useState( 'fer bendala' )
    const [password, setPassword] = useState( 'estaesunaContraseñad3l0m4sExtraña' )

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
        <>
            <form onSubmit={handleLogin}>
                <fieldset>
                    <legend>Login</legend>
                    <Input
                        id='username'
                        label='Nombre de usuario'
                        type='text'
                        value={username}
                        setValue={( { target } ) => setUsername( target.value )}
                    />
                    <Input
                        id='password'
                        label='Contraseña'
                        type='password'
                        value={password}
                        setValue={setUsername}
                    />
                    <Button
                        text='Continue'
                        type='submit'
                    />
                </fieldset>
            </form>

            <div>or</div>

            <div>
                <Button
                    Icon={MailRoundedIcon}
                    text='Sign in with mail'
                    secondary={true}
                />
                <Button
                    Icon={AppleIcon}
                    text='Continue with google'
                    secondary={true}
                />
                <Button
                    Icon={GoogleIcon}
                    text='Continue with apple'
                    secondary={true}
                />
            </div>
        </>
    )
}

export default Login