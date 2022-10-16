import styles from './styles.module.scss'

import { Header } from './components/Header/Header'
import { Item } from './components/Item/Item'
import { Footer } from './components/Footer/Footer'

const DATA = [
    {
        id: 1,
        name: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop off 2019',
        tag: 'НОВИНКА',
        duration: '2 часа',
        price: {
            online: 900,
            boarding: 1200,
        },
        description: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
        ],
        times: ['12:00', '13:00', '14:00', '15:00'],
        img: {
            small: 'https://vladkoleda.ru/neva/1-mobile.jpg',
            medium: 'https://vladkoleda.ru/neva/1.jpg',
        },
    },
    {
        id: 2,
        name: 'Реки и каналы центрального Петербурга 2022',
        tag: 'КРУГЛЫЙ ГОД',
        duration: '1 час 50 минут',
        price: {
            online: 900,
            boarding: null,
        },
        description: [
            'Самая классическая обзорная прогулка',
            'Аудиогид с экскурсией на русском языке',
            'Маршрут по центральным рекам и каналам',
            'Кафе-бар на борту',
            'Отправление ежедневно каждый час',
        ],
        times: [
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
        ],
        img: {
            small: 'https://vladkoleda.ru/neva/2-mobile.jpg',
            medium: 'https://vladkoleda.ru/neva/2.jpg',
        },
    },
    {
        id: 3,
        name: 'АКЦИЯ — Экскурсия под развод мостов на 2-палубном теплоходе 2022',
        tag: 'КРУГЛЫЙ ГОД',
        duration: '1 час 30 минут — 2 часа',
        price: {
            online: 900,
            boarding: null,
        },
        description: [
            'Самый длинный экскурсионный маршрут по Неве',
            'Развод 4 мостов с воды прямо на твоих глазах',
            '«Живая» экскурсия от гида на борту',
            'Авторский аудиогид от команды Nevatrip в подарок',
            'Отправление ежедневно каждый час',
        ],
        nextTime: 1665783600,
        times: ['12:00', '13:00', '14:00', '15:00'],
        img: {
            small: 'https://vladkoleda.ru/neva/3-mobile.jpg',
            medium: 'https://vladkoleda.ru/neva/3.jpg',
        },
    },
]

export const HomePage = () => {
    return (
        <>
            <Header />
            <div className={styles.banner} />
            <main className={styles.main}>
                <div className='container'>
                    <section className={styles.row}>
                        {DATA.map((item) => (
                            <Item key={item.id} {...item} />
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
