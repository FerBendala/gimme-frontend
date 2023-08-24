import styles from './separator.module.scss'

const Separator = ( { text } ) =>
    <div className={styles['separator']}>
        <span className={styles['separator__line']}></span>
        <span className={styles['separator__text']}>{text}</span>
        <span className={styles['separator__line']}></span>
    </div>

export default Separator