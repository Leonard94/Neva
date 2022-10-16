import { HeaderOrder } from './HeaderOrder/HeaderOrder'
import { StepForm } from './StepForm/StepForm'

// Mock
const DATA = {
    id: 1,
    img: 'https://vladkoleda.ru/neva/1-mobile.jpg',
    name: 'Метеор в Петергоф',
    directions: ['из А в B', 'из B в А', 'из А в B и обратно в А'],
    duration: 50,
    times: [
        '2022-12-12 18:00:00',
        '2022-12-12 18:30:00',
        '2022-12-12 18:45:00',
        '2022-12-12 19:00:00',
        '2022-12-12 19:15:00',
        '2022-12-12 21:00:00',
    ],
    returnTimes: [
        '2022-12-12 18:30:00',
        '2022-12-12 18:45:00',
        '2022-12-12 19:00:00',
        '2022-12-12 19:15:00',
        '2022-12-12 19:35:00',
        '2022-12-12 21:50:00',
        '2022-12-12 21:55:00',
    ],
    ticketPrice: 700,
    compositeTicketPrice: 1200,
}

export const OrderPage = () => {
    return (
        <>
            <HeaderOrder name={DATA.name} />
            <main>
                <section>
                    <StepForm DATA={DATA} />
                </section>
            </main>
        </>
    )
}
