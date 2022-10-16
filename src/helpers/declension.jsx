export const getDeclension = (number, units) => {
    const data = {
        tickets: ['билет', 'билета', 'билетов'],
    }

    number = Math.abs(number) % 100
    const number1 = number % 10

    if (number > 10 && number < 20) {
        return data[units][2]
    }
    if (number1 > 1 && number1 < 5) {
        return data[units][1]
    }
    if (number1 === 1) {
        return data[units][0]
    }
    return data[units][2]
}
