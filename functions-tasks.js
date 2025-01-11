function functionsTask() {
    function getName1(name) {
        return `Имя равно ${name}`
    }

    const getName2 = function (name) {
        return `Имя равно ${name}`
    }

    const getName3 = (name) => {
        return `Имя равно ${name}`
    }

    console.log(getName1('Саша'))
    console.log(getName2('Костя'))
    console.log(getName3('Никита'))
}

function functionsTask2() {
    const getSumOfNumbers = (number, type = 'odd') => {
        if (typeof number !== 'number') return NaN

        let sum = 0
        for (let i = 0; i <= number; i++) {
            if (type === 'even' && i % 2 === 0) {
                sum += i
            } else if (type === 'odd' && i % 2 !== 0) {
                sum += i
            } else if (type === '') {
                sum += i
            }
        }
        return sum
    }

    console.log(getSumOfNumbers(10, "odd")); // 25
    console.log(getSumOfNumbers(10, "even")); // 30
    console.log(getSumOfNumbers(10, "")); // 55
    console.log(getSumOfNumbers()); // NaN
}

function functionsTask3() {
    const getDivisorsCount = (number) => {
        if (typeof number !== 'number') return NaN
        if (number <= 0 || !Number.isInteger(number)) return alert(`${number} должен быть целым числом и больше нуля!`)

        const arr = []
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) arr.push(i)
        }
        return arr.length
    }

    console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
    console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
    console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
    console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
    console.log(getDivisorsCount()); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
    console.log(getDivisorsCount(0)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
}