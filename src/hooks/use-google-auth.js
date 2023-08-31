import axios from 'axios'
import { useGoogleLogin } from '@react-oauth/google'

import loginService from '../services/login'
import usersService from '../services/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPicture, setUser } from '../redux/reducers/login-reducer'

export const useGoogleAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const navigateToHome = ( user, picture ) => {
        dispatch( setPicture( picture ) )
        dispatch( setUser( user ) )
        navigate( '/' )
    }

    // Create Google user
    const googleCreateUser = async ( userInfo ) => {
        try {
            const createUser = await usersService.create( userInfo )
            navigateToHome( createUser.username, createUser.picture )
        } catch ( error ) { console.log( error ) }
    }

    // Try to login with google credentials and if not try to create new user into google
    const googleTryToLoginOrCreateUser = async ( userInfo ) => {
        try {
            await loginService.login( { username: userInfo.user, password: userInfo.password } )
            navigateToHome( userInfo.user, userInfo.picture )
        }
        catch ( error ) { googleCreateUser( userInfo ) }
    }

    // Set google data, try ro login and if not create new google user
    const googleData = async ( userToken ) => {
        const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken.access_token}`
        const headers = {
            headers: {
                Authorization: `Bearer ${userToken.access_token}`,
                Accept: 'application/json'
            }
        }

        const googleUserCall = await axios.get( url, headers )
        const googleUser = googleUserCall.data
        const googleUserInfo = {
            user: googleUser.name,
            username: googleUser.name,
            password: googleUser.id,
            picture: googleUser.picture,
            email: googleUser.email
        }

        await googleTryToLoginOrCreateUser( googleUserInfo )
    }

    // Call to google auth
    const googleLogin = useGoogleLogin( {
        onSuccess: ( userToken ) => googleData( userToken ),
        onError: ( error ) => console.log( 'Login Failed:', error )
    } )

    return googleLogin
}
