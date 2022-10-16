import styles from './styles.module.scss'
import classnames from 'classnames'

export const Select = ({ name, options, value, onChange, label }) => {
    const selectStyles = classnames(styles.select, {
        [styles.select_withlabel]: label,
    })

    return (
        <div className={styles.body}>
            {label ? (
                label === 'из А' ? (
                    <span>туда</span>
                ) : (
                    <span>обратно</span>
                )
            ) : null}
            <select
                className={selectStyles}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
            >
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}
