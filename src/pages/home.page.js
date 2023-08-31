import { useEffect, useState } from 'react'

import AutoComplete from '../components/autocomplete/autocomplete.component'

import mercadonaData from '../assets/data/mercadona-18082023-093743.json'
import capraboData from '../assets/data/caprabo-18082023-093743.json'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState( '' )
    const [filteredData, setFilteredData] = useState( [] )

    useEffect( () => {
        if ( searchTerm ) {
            let mercadona = []
            let caprabo = []

            // Check data
            if ( searchTerm.length > 3 ) {
                // Check Mercadona data
                for ( const category of Object.keys( mercadonaData ) ) {
                    for ( const subcategory of Object.keys( mercadonaData[category] ) ) {
                        for ( const subcategoryOfSubcategory of Object.keys( mercadonaData[category][subcategory] ) ) {
                            mercadonaData[category][subcategory][subcategoryOfSubcategory].filter( product => {
                                if ( product.name.toLowerCase().includes( searchTerm.toLowerCase() ) ) {
                                    mercadona.push( product )
                                }
                            } )
                        }
                    }
                }

                // Check Caprabo data
                for ( const category of Object.keys( capraboData ) ) {
                    capraboData[category].filter( product => {
                        if ( product.name.toLowerCase().includes( searchTerm.toLowerCase() ) ) {
                            caprabo.push( product )
                        }
                    } )
                }
            }

            // Get data
            setFilteredData( [{ mercadona }, { caprabo }] )
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
