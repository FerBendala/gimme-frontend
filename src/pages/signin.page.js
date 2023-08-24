import { useState } from 'react'

import Form from '../components/form/form.component'
import Input from '../components/input/input.component'
import Button from '../components/button/button.component'

const SignIn = () => {
    const [username, setUsername] = useState( '' )
    const [mail, setMail] = useState( '' )
    const [password, setPassword] = useState( '' )
    const [passwordRepeated, setPasswordRepeated] = useState( '' )

    return (
        <>
            <Form
                title='Sign in'
            >
                <Input
                    id='username'
                    label='Nombre de usuario'
                    type='text'
                    value={username}
                    setValue={setUsername}
                />
                <Input
                    id='mail'
                    label='Mail'
                    type='email'
                    value={mail}
                    setValue={setMail}
                />
                <Input
                    id='password'
                    label='Contraseña'
                    type='password'
                    value={password}
                    setValue={setPassword}
                />
                <Input
                    id='passwordRepeated'
                    label='Repetir Contraseña'
                    type='password'
                    value={passwordRepeated}
                    setValue={setPasswordRepeated}
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