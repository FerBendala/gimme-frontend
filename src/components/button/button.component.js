import styles from './button.module.scss'

const Button = ( { Icon, picture, text, handleAction, type = 'button', secondary = false } ) => {

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
            {picture && <img className={styles['button__image']} src={picture} alt={text} />}
            {text && <span className={styles['button__text']}>{text}</span>}
        </button >
    )
}

export default Button