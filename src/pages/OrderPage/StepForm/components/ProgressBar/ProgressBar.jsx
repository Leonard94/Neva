import styles from './styles.module.scss'
import classnames from 'classnames'

import { ReactComponent as IconShip } from '../../../../../assets/icons/ship.svg'

export const ProgressBar = ({ currentStep }) => {
    const getClassesFromLine = (elem) => {
        return classnames(styles.line, {
            [styles.line_active]: currentStep - 1 >= elem,
        })
    }

    const getClassesFromIcon = (elem) => {
        return classnames(styles.icon, {
            [styles.icon_active]: currentStep - 1 >= elem,
        })
    }

    return (
        <div className={styles.row}>
            <div className={getClassesFromIcon(1)}>
                <IconShip />
            </div>
            <span className={getClassesFromLine(1)} />
            <div className={getClassesFromIcon(2)}>
                <IconShip />
            </div>
            <span className={getClassesFromLine(2)} />
            <div className={getClassesFromIcon(3)}>
                <IconShip />
            </div>
        </div>
    )
}
