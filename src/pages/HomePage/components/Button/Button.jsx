import styles from './styles.module.scss'

export const Button = ({ children }) => {
    return (
        <button className={styles.btn}>
            <span>{children}</span>
        </button>
    )
}
