import styles from './styles.module.scss'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Times = ({ times }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(0)
    const [timeRowItems, setTimeRowItems] = useState(0)

    const elementsInRow = () => {
        if (width < 360) {
            return setTimeRowItems(3)
        }
        if (width < 440) {
            return setTimeRowItems(4)
        }
        if (width < 1000) {
            return setTimeRowItems(5)
        }
        if (width < 1100) {
            return setTimeRowItems(6)
        }

        setTimeRowItems(8)
    }

    const isHidden = (index) => {
        if (!isOpen && times.length > timeRowItems) {
            if (index < timeRowItems - 1) return false
            return true
        }
        return false
    }

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleResize = () => {
        setWidth(document.documentElement.clientWidth)
    }

    useEffect(() => {
        if (times.length > 3) {
            window.addEventListener('resize', handleResize)
            elementsInRow()
        }

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className={styles.times}>
            {times.map((time, index) => (
                <Link
                    to='/order'
                    href='#'
                    className={styles.time}
                    key={index}
                    hidden={isHidden(index)}
                >
                    {time}
                </Link>
            ))}
            {times.length > timeRowItems && !isOpen && (
                <span className={styles.time} onClick={handleOpen}>
                    ещё...
                </span>
            )}
        </div>
    )
}
