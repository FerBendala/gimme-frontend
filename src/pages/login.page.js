import { useState } from 'react'

import loginService from '../services/login'

import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducers/login-reducer'
import { useNavigate } from 'react-router-dom'

import { useGoogleLogin } from '@react-oauth/google'

import Button from '../components/button/button.component'

import MailRoundedIcon from '@mui/icons-material/MailRounded'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'
import Input from '../components/input/input.component'
import Form from '../components/form/form.component'
import Separator from '../components/separator/separator.component'


const Login = () => {
    const [username, setUsername] = useState( 'fer bendala' )
    const [password, setPassword] = useState( 'estaesunaContraseñad3l0m4sExtraña' )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const googleLogin = useGoogleLogin( {
        onSuccess: ( codeResponse ) => console.log(codeResponse),
        onError: ( error ) => console.log( 'Login Failed:', error )
    } )

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
            <Form
                onSubmit={handleLogin}
                title='Login'
            >
                <Input
                    id='username'
                    label='Nombre de usuario'
                    type='text'
                    value={username}
                    setValue={setUsername}
                />
                <Input
                    id='password'
                    label='Contraseña'
                    type='password'
                    value={password}
                    setValue={setPassword}
                />
                <Button
                    text='Continue'
                    type='submit'
                />

                <Separator text='or' />

                <div>
                    <Button
                        Icon={MailRoundedIcon}
                        text='Sign in with mail'
                        secondary={true}
                        handleAction={() => navigate( '/sign-in' )}
                    />
                    <Button
                        Icon={AppleIcon}
                        text='Continue with apple'
                        secondary={true}
                    />
                    <Button
                        Icon={GoogleIcon}
                        text='Continue with google'
                        secondary={true}
                        handleAction={() => googleLogin()}
                    />
                </div>
            </Form>
        </>
    )
}

export default Login