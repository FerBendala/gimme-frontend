import styles from './input.module.scss'

const Input = ( { id, label, type, value, setValue } ) =>
    <label
        className={styles['input__label']}
        htmlFor={id}
    >
        <span className={styles['input__text']}>{label}</span>
        <input
            id={id}
            name={id}
            type={type}
            value={value}
            className={styles['input']}
            onChange={( { target } ) => setValue( target.value )}
        />
    </label>


export default Input