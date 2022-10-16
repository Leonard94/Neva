import styles from './styles.module.scss'

export const Step = ({ children, active = false, title }) => {
    if (!active) return null
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>{children}</div>
        </>
    )
}
