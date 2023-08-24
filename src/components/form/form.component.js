import styles from './form.module.scss'

const Form = ( { onSubmit, title, children } ) => {
    return (
        <form
            onSubmit={onSubmit}
            className={styles['form']}
        >
            <fieldset className={styles['form__container']}>
                <legend className={styles['form__title']}>{title}</legend>
                {children}
            </fieldset>
        </form>
    )
}

export default Form