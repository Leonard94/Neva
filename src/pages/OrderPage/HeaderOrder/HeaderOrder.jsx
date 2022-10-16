import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import IconLogoWhite from '../../../assets/icons/logo-white.svg'

export const HeaderOrder = ({ name }) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <Link to='/' className={styles.logo}>
                        <img
                            src={IconLogoWhite}
                            alt='Логотип nevatrip'
                            title='Вернуться на главную'
                        />
                    </Link>
                    <h1 className={styles.title}>Выбор билетов на {name}</h1>
                </div>
            </div>
        </header>
    )
}
