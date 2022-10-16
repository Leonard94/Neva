import styles from './styles.module.scss'

export const TicketStep = ({ formData, onChangeTickets }) => {
    return (
        <div className={styles.counter}>
            <button
                className={styles.btn}
                onClick={onChangeTickets}
                disabled={formData.tickets === 1}
                name='decrement'
            >
                -
            </button>
            <div className={styles.value}>{formData.tickets}</div>
            <button
                className={styles.btn}
                onClick={onChangeTickets}
                name='increment'
            >
                +
            </button>
        </div>
    )
}
