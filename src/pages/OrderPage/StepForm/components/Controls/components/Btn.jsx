import styles from './styles.module.scss'

import classnames from 'classnames'

export const Btn = ({ children, onClick, disabled = false, fill = false }) => {
    const btnClass = classnames(styles.btn, {
        [styles.btn_fill]: fill,
    })
    return (
        <button className={btnClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}
