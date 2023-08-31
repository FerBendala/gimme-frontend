import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const create = async newObject => {
    const request = axios.post( baseUrl, newObject )
    return request.then( response => response.data )
}

const usersService = { create }
export default usersService