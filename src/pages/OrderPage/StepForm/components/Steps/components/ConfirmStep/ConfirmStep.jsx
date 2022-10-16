import styles from './styles.module.scss'

import { getDeclension } from '../../../../../../../helpers/declension'

import { ReactComponent as IconShip } from '../../../../../../../assets/icons/ship2.svg'
import { ReactComponent as IconTicket } from '../../../../../../../assets/icons/ticket.svg'
import { ReactComponent as IconTime } from '../../../../../../../assets/icons/time.svg'

export const ConfirmStep = ({ data, formData }) => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.img}>
                    <img src={data.img} alt={data.name} />
                </div>
                <p>{data.name}</p>
            </div>

            <div className={styles.item}>
                <div className={styles.icon}>
                    <IconShip />
                </div>
                <p>
                    Отправление {data.directions[0]} в <b>{formData.time}</b>
                </p>
            </div>

            {formData.returnTicket && (
                <div className={styles.item}>
                    <div
                        className={styles.icon}
                        style={{ transform: 'scale(-1, 1)' }}
                    >
                        <IconShip />
                    </div>
                    <p>
                        Обратно в <b>{formData.returnTime}</b>
                    </p>
                </div>
            )}

            <div className={styles.item}>
                <div className={styles.icon}>
                    <IconTicket />
                </div>
                <p>
                    <b>{formData.tickets}</b>&nbsp;
                    {getDeclension(formData.tickets, 'tickets')}&nbsp;общей
                    стоимостью&nbsp;
                    <b>
                        {formData.returnTicket
                            ? formData.tickets * data.compositeTicketPrice
                            : formData.tickets * data.ticketPrice}
                    </b>
                    &nbsp;₽
                </p>
            </div>

            <div className={styles.item}>
                <div className={styles.icon}>
                    <IconTime />
                </div>
                <p>
                    Это путешествие займёт&nbsp;
                    <b>
                        {formData.returnTicket
                            ? data.duration * 2
                            : data.duration}
                        &nbsp;минут
                    </b>
                    &nbsp;{formData.returnTicket && 'в обе стороны'}
                </p>
            </div>
        </>
    )
}
