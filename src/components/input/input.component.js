import styles from './input.module.scss'

const Input = (
    { id, label, type, value, setValue, required = false, error = false, removeAutocomplete = false }
) =>
    <label
        className={styles['input__label']}
        htmlFor={id}
    >
        <span className={error
            ? [styles['input__text'], styles['error']].join( ' ' )
            : styles['input__text']
        }>{label}</span>
        <input
            id={id}
            name={id}
            type={type}
            value={value}
            className={error
                ? [styles['input'], styles['error']].join( ' ' )
                : styles['input']
            }
            onChange={( { target } ) => setValue( target.value )}
            required={required}
            autoComplete={!removeAutocomplete ? 'on' : 'off'}
        />
    </label>


export default Input