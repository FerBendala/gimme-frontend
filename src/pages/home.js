import { useEffect } from 'react'

import mercadonaData from '../data/mercadona-18082023-093743.json'
import capraboData from '../data/caprabo-18082023-093743.json'

const Home = () => {

    // blogs-app api call
    useEffect( () => {
        console.log( mercadonaData )
        console.log( capraboData )
    }, [] )


    return (
        <h1>Hola mundo</h1>
    )
}

export default Home