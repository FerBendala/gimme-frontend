import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducers/login-reducer'
import { useNavigate } from 'react-router-dom'

import Form from '../components/form/form.component'
import Input from '../components/input/input.component'
import Button from '../components/button/button.component'
import usersService from '../services/user'

const SignIn = () => {
    const [username, setUsername] = useState( '' )
    const [name, setName] = useState( '' )
    const [lastName, setLastName] = useState( '' )
    const [email, setMail] = useState( '' )
    const [password, setPassword] = useState( '' )
    const [confirmPassword, setConfirmPassword] = useState( '' )
    const [passwordMismatch, setPasswordMismatch] = useState( false )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignIn = async event => {
        event.preventDefault()

        if ( password === confirmPassword ) {
            try {
                // Set user session
                const completeName = `${name} ${lastName}`
                const createUser = await usersService.create( {
                    user: completeName,
                    username,
                    password,
                    picture: '',
                    email
                } )
                dispatch( setUser( createUser.username ) )

                // Navigate to the app
                navigate( '/' )
            } catch ( error ) { alert( 'Existing user, please login' ) }
        } else {
            setPasswordMismatch( true )
            alert( 'The passwords do not match' )
        }
    }

    return (
        <>
            <Form
                onSubmit={handleSignIn}
                title='Sign in'
                backButton
            >
                <Input
                    id='username'
                    label='Nickname de usuario'
                    type='text'
                    value={username}
                    setValue={setUsername}
                    required
                />
                <Input
                    id='name'
                    label='Nombre'
                    type='text'
                    value={name}
                    setValue={setName}
                    required
                />
                <Input
                    id='lastname'
                    label='Apellido/s'
                    type='text'
                    value={lastName}
                    setValue={setLastName}
                />
                <Input
                    id='email'
                    label='email'
                    type='email'
                    value={email}
                    setValue={setMail}
                    required
                />
                <Input
                    id='password'
                    label='Contraseña'
                    type='password'
                    value={password}
                    setValue={setPassword}
                    error={passwordMismatch}
                    required
                />
                <Input
                    id='confirm_password'
                    label='Repetir Contraseña'
                    type='password'
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    error={passwordMismatch}
                    required
                />
                <Button
                    text='Continue'
                    type='submit'
                />
            </Form>
        </>
    )
}

export default SignIn