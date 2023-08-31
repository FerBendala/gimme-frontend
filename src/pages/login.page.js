import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/reducers/login-reducer'
import { useNavigate } from 'react-router-dom'

import loginService from '../services/login'

import Button from '../components/button/button.component'

import MailRoundedIcon from '@mui/icons-material/MailRounded'
import GoogleIcon from '@mui/icons-material/Google'
import Input from '../components/input/input.component'
import Form from '../components/form/form.component'
import Separator from '../components/separator/separator.component'
import { useGoogleAuth } from '../hooks/use-google-auth'


const Login = () => {
    const user = useSelector( ( state ) => state.login.username )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const googleLogin = useGoogleAuth()

    const [username, setUsername] = useState( '' )
    const [password, setPassword] = useState( '' )

    useEffect( () => {
        if ( user !== undefined ) navigate( '/' )
    }, [user, navigate] )

    const navigateToHome = user => {
        dispatch( setUser( user ) )
        navigate( '/' )
    }

    // Login service
    const login = async ( username, password ) => {
        await loginService.login( { username, password } )
        navigateToHome( username )
    }

    // Handle login form on submit
    const handleLogin = async event => {
        event.preventDefault()

        try { login( username, password ) }
        catch ( error ) { alert( 'Wrong username or password' ) }
    }

    return (
        <Form
            onSubmit={handleLogin}
            title='Login'
        >
            {/* Enter to the app */}
            <Input
                id='username'
                label='Nombre de usuario'
                type='text'
                value={username}
                setValue={setUsername}
                required
            />
            <Input
                id='password'
                label='Contraseña'
                type='password'
                value={password}
                setValue={setPassword}
                required
            />
            <Button
                text='Continue'
                type='submit'
            />

            {/* Just decoration */}
            <Separator text='or' />

            {/* Sign in */}
            <Button
                Icon={MailRoundedIcon}
                text='Sign in with mail'
                secondary={true}
                handleAction={() => navigate( '/sign-in' )}
            />
            <Button
                Icon={GoogleIcon}
                text='Continue with google'
                secondary={true}
                handleAction={googleLogin}
            />
        </Form>
    )
}

export default Login