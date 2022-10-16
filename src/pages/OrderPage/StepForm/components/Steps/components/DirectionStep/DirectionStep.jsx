import styles from './styles.module.scss'
import { Select } from '../Select/Select'

export const DirectionStep = ({ formData, data, onChangeDirections }) => {
    return (
        <div className={styles.container}>
            <Select
                name='direction'
                options={data.directions}
                value={formData.direction}
                onChange={onChangeDirections}
            />
        </div>
    )
}
