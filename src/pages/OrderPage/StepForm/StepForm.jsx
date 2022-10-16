import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/ru'

import { Steps } from './components/Steps/Steps'
import { Step } from './components/Steps/components/Step/Step'
import { DirectionStep } from './components/Steps/components/DirectionStep/DirectionStep'
import { TimeStep } from './components/Steps/components/TimeStep/TimeStep'
import { TicketStep } from './components/Steps/components/TicketStep/TicketStep'
import { ConfirmStep } from './components/Steps/components/ConfirmStep/ConfirmStep'

moment.locale('ru')

const getLocalTime = (str) => {
    const time = moment.utc(str)
    return moment(time).local().subtract(3, 'hours').format('HH:mm')
}

export const StepForm = ({ DATA }) => {
    const [data] = useState({
        ...DATA,
        times: DATA.times.map((time) => getLocalTime(time)),
        returnTimes: DATA.returnTimes.map((time) => getLocalTime(time)),
    })

    const [formData, setFormData] = useState({
        direction: data.directions[0],
        time: data.times[0],
        returnTimes: data.times[1],
        returnTime: data.times[1],
        tickets: 2,
        returnTicket: false,
    })

    const onSubmit = () => {
        const order = {
            id: data.id,
            name: data.name,
            ticketPrice: formData.returnTicket
                ? data.compositeTicketPrice
                : data.ticketPrice,
            totalPrice: formData.tickets * data.ticketPrice,
            direction: formData.direction,
            time: formData.time,
            returnTicket: formData.returnTicket,
            returnTime: formData.returnTicket ? formData.returnTime : null,
            tickets: formData.tickets,
        }
        alert('Информация о заказе в консоле')
        console.log('Отправляем на сервер информацию о заказе: ', order)
    }

    const onChangeDirections = (e) => {
        const value = e.target.value

        if (value === data.directions[2]) {
            const values = data.returnTimes.filter(
                (time) => time > formData.time
            )
            setFormData({
                ...formData,
                direction: value,
                returnTicket: true,
                returnTimes: values,
            })
        } else {
            setFormData({
                ...formData,
                direction: value,
                returnTicket: false,
            })
        }
    }

    const onChangeTime = (e) => {
        const name = e.target.name

        if (name === 'returnTimes') {
            setFormData({
                ...formData,
                returnTime: e.target.value,
            })
        } else {
            const values = data.returnTimes.filter(
                (time) => time > e.target.value
            )

            setFormData({
                ...formData,
                [name]: e.target.value,
                returnTimes: values,
            })
        }
    }

    const onChangeTickets = (e) => {
        const value = e.target.name

        if (value === 'decrement') {
            setFormData({
                ...formData,
                tickets: formData.tickets - 1,
            })
        } else {
            setFormData({
                ...formData,
                tickets: formData.tickets + 1,
            })
        }
    }

    return (
        <div className={styles.form}>
            <div className='container-small'>
                <div className={styles.body}>
                    <Steps onSubmit={onSubmit}>
                        <Step title='Выберите направление'>
                            <DirectionStep
                                formData={formData}
                                onChangeDirections={onChangeDirections}
                                data={data}
                            />
                        </Step>
                        <Step title='Время отправления'>
                            <TimeStep
                                formData={formData}
                                onChangeTime={onChangeTime}
                                data={data}
                            />
                        </Step>
                        <Step title='Количество билетов'>
                            <TicketStep
                                formData={formData}
                                onChangeTickets={onChangeTickets}
                            />
                        </Step>
                        <Step title='Ваш заказ'>
                            <ConfirmStep data={data} formData={formData} />
                        </Step>
                    </Steps>
                </div>
            </div>
        </div>
    )
}
