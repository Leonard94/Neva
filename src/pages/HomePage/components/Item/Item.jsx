import styles from './styles.module.scss'

import { Link } from 'react-router-dom'

import { Times } from './components/Times/Times'

import { ReactComponent as IconDuration } from '../../../../assets/icons/duration.svg'

export const Item = (props) => {
    const { id, name, tag, duration, price, description, times, img } = props

    return (
        <div className={styles.item}>
            <Link to='/order' className={styles.img}>
                <img src={img.medium} alt={name} />
                {tag && <span className={styles.tag}>{tag}</span>}
            </Link>

            <div className={styles.info}>
                <div className={styles.duration}>
                    <IconDuration />
                    <span>{duration}</span>
                </div>

                <h3 className={styles.name}>{name}</h3>

                <ul className={styles.description}>
                    {description.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                        </li>
                    ))}
                    <li>
                        <span>Ближайший рейс сегодня</span>
                        <Times times={times} />
                    </li>
                </ul>
                <div className={styles.row}>
                    <div className={styles.price}>
                        <span className={styles.price_online}>
                            {price.online} ₽
                        </span>
                        {price.boarding && (
                            <span className={styles.price_boarding}>
                                {price.boarding} ₽ на причале
                            </span>
                        )}
                    </div>
                    <Link to='/order' className={styles.btn}>
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    )
}
