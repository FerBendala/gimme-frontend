import { Link } from 'react-router-dom'
import styles from './form.module.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Form = ( { onSubmit, title, children, backButton = false } ) => {
    return (
        <form
            onSubmit={onSubmit}
            className={styles['form']}
        >
            <fieldset className={styles['form__container']}>
                {backButton &&
                    <Link className={styles['form__back-button']} to='/login'>
                        <ArrowBackIcon />
                    </Link>
                }
                <legend className={styles['form__title']}>{title}</legend>
                {children}
            </fieldset>
        </form>
    )
}

export default Form