import { useEffect, useState } from 'react'

import AutoComplete from '../components/autocomplete/autocomplete.component'

import Fuse from 'fuse.js'
import mercadonaData from '../assets/data/mercadona.json'
import capraboData from '../assets/data/caprabo.json'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState( '' )
    const [filteredData, setFilteredData] = useState( [] )

    useEffect( () => {
        if ( searchTerm ) {
            const debounceTimer = setTimeout( () => {
                if ( searchTerm.length > 3 ) {
                    // Configurar opciones para la búsqueda difusa
                    const fuseOptions = {
                        keys: ['name'],
                        threshold: 0.3,
                    }

                    // Crear una instancia de Fuse con los datos y opciones
                    const mercadonaFuse = new Fuse( mercadonaData, fuseOptions )
                    const capraboFuse = new Fuse( capraboData, fuseOptions )

                    // Realizar la búsqueda difusa
                    Promise.all( [
                        mercadonaFuse.search( searchTerm ),
                        capraboFuse.search( searchTerm ),
                    ] ).then( ( [mercadona, caprabo] ) => {
                        setFilteredData( [{ mercadona }, { caprabo }] )
                    } )
                }
            }, 2000 ) // Tiempo de espera de 2 segundos

            // Limpiar el temporizador anterior en cada cambio de término de búsqueda
            return () => clearTimeout( debounceTimer )
        } else {
            // Clear the filtered data if searchTerm is empty
            setFilteredData( [] )
        }
    }, [searchTerm] )

    return (
        <section className='container'>
            <AutoComplete
                data={filteredData}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
        </section >
    )
}

export default Home
