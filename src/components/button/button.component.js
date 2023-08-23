import styles from './button.module.scss'

const Button = ( { Icon, text, handleAction, type = 'button', secondary = false } ) => {

    const secondaryButton = secondary
        ? [styles['button'], styles['button--secondary']].join( ' ' )
        : styles['button']

    return (
        <button
            type={type}
            onClick={handleAction}
            className={
                !text
                    ? [secondaryButton, styles['button--only-icon']].join( ' ' )
                    : secondaryButton
            }
        >
            {Icon && <Icon className={styles['button__icon']} />}
            {text && <span className={styles['button__text']}>{text}</span>}
        </button >
    )
}

export default Button