import React from 'react'
import Input from '../input/input.component'

import styles from './autocomplete.module.scss'

const AutoComplete = ( { data = [], searchTerm, setSearchTerm } ) => {

    const hasData = data.some( sourceData => {
        const products = Object.values( sourceData )[0]
        return Array.isArray( products ) && products.length > 0
    } )

    return (
        <div className={styles['autocomplete']}>
            <Input
                id='search'
                label='Búsqueda'
                type='text'
                value={searchTerm}
                setValue={setSearchTerm}
                required
                removeAutocomplete
            />
            {hasData &&
                <section className={styles['autocomplete__container']}>
                    {data.map( ( data, index ) => {
                        const sourceName = Object.keys( data )[0]
                        const products = data[sourceName]

                        return (
                            <>
                                <h2 className={styles['autocomplete__list__title']}>{sourceName}</h2>
                                <ul
                                    key={index}
                                    className={styles['autocomplete__list']}
                                >
                                    {products?.map( ( product, key ) => (
                                        <li
                                            key={key}
                                            className={styles['autocomplete__list__item']}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={styles['item__image']}
                                            />
                                            <div className={styles['item__info']}>
                                                <p className={styles['item__info__name']}>{product.name} {product?.description && `- ${product?.description}`}</p>
                                                <p className={styles['item__info__price']}>{product.price}</p>
                                            </div>
                                        </li>
                                    ) )}
                                </ul>
                            </>
                        )
                    } )}
                </section>
            }
        </div>
    )
}

export default AutoComplete
