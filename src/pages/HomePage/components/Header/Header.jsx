import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

import { Burger } from './components/Burger'

import Logo from '../../../../assets/icons/logo.svg'
import IconInstagram from '../../../../assets/icons/instagram.svg'
import IconVK from '../../../../assets/icons/vk.svg'
import IconYoutube from '../../../../assets/icons/youtube.svg'
import IconTelegram from '../../../../assets/icons/telegram.svg'

export const Header = () => {
    return (
        <header>
            <div className={styles.top}>
                <div className='container'>
                    <div className={styles.top_inner}>
                        <div className={styles.left}>
                            <Link to='/' className={styles.logo}>
                                <img
                                    src={Logo}
                                    alt='Логотип nevatrip'
                                    title='На главную'
                                />
                            </Link>
                            <div className={styles.slogan}>
                                Лучшие водные экскурсии по Петербургу
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.social}>
                                <a href='https://www.instagram.com/nevatrip.ru/'>
                                    <img src={IconInstagram} alt='Инстаграм' />
                                </a>
                                <a href='https://vk.com/neva.trip'>
                                    <img src={IconVK} alt='Вконтакте' />
                                </a>
                                <a href='https://www.youtube.com/channel/UC3vCmQx4KRNwAhllZZU9n0Q'>
                                    <img src={IconYoutube} alt='Ютуб' />
                                </a>
                                <a href='https://t.me/NevatripBot'>
                                    <img src={IconTelegram} alt='Телеграм' />
                                </a>
                            </div>
                            <address className={styles.contacts}>
                                <a href='tel:88122449824'>
                                    8&nbsp;812 244-98-24
                                </a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className='container'>
                    <Burger />
                    <ul className={styles.menu}>
                        <li>
                            <Link to='/order'>Дневные экскурсии</Link>
                        </li>
                        <li>
                            <Link to='/order'>Ночные прогулки</Link>
                        </li>
                        <li>
                            <Link to='/order'>Метеоры</Link>
                        </li>
                        <li>
                            <Link to='/order'>Ресторан на теплоходе</Link>
                        </li>
                        <li>
                            <Link to='/order'>Яхтинг</Link>
                        </li>
                        <li>
                            <Link to='/order'>Аренда</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
