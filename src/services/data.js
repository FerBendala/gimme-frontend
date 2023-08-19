import axios from 'axios'
const baseUrl = 'http://localhost:3001/mercadona'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = async () => {
    const request = axios.get( baseUrl )
    return request.then( response => response.data )
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token }
    }

    const request = axios.post( baseUrl, newObject, config )
    return request.then( response => response.data )
}

const update = async ( objectId, newObject ) => {
    const config = { headers: { Authorization: token } }
    const request = axios.put( `${baseUrl}/${objectId}`, newObject, config )
    return request.then( response => response.data )
}

const remove = async ( objectId ) => {
    const config = { headers: { Authorization: token } }

    const request = axios.delete( `${baseUrl}/${objectId}`, config )
    return request.then( response => response.data )
}

const dataService = {
    getAll,
    create,
    update,
    remove,
    setToken,
}
export default dataService