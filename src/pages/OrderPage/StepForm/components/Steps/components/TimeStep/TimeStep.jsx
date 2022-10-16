import styles from './styles.module.scss'
import { Select } from '../Select/Select'

export const TimeStep = ({ formData, onChangeTime, data }) => {
    return (
        <div className={styles.container}>
            <Select
                name='time'
                options={data.times}
                value={formData.time}
                onChange={onChangeTime}
                label={formData.returnTicket && 'из А'}
            />
            {formData.returnTicket && (
                <Select
                    name='returnTimes'
                    options={formData.returnTimes}
                    value={formData.returnTime}
                    onChange={onChangeTime}
                    label='в Б'
                />
            )}
        </div>
    )
}
