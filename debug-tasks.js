function debugTask() {
    let health = prompt('Введите число параметра "здоровье" для персонажа');
    if (health < 0 || !health) {
        alert('Параметр "здоровье" должен быть больше нуля!');
    } else {
        console.log(health);
        alert(`Параметр здоровье равен ${health}`);
    }
}

function debugTask2() {
    let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
    console.log(temperatureInCelsius);

    temperatureInCelsius = Number(temperatureInCelsius);

    if (temperatureInCelsius === 0) {
        alert('0 градусов по Цельсию - это температура замерзания воды');
    } else if (temperatureInCelsius > 0) {
        alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
    }

    const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
    alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
}

function debugTask3() {
    const salaryOfJuniorDeveloper = 500;
    const numberOfJuniorDevelopers = 3;
    let taxPercentage = 13;
    let totalJuniorDevelopersSalary = 0;
    console.log(totalJuniorDevelopersSalary);

    for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
        const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
        totalJuniorDevelopersSalary += salaryWithTax;
        console.log(totalJuniorDevelopersSalary);
    }
    console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
}

function debugTask4() {
    let numbers = [10, 4, 100, -5, 54, 2];
    let sum = 0;

    // Через цикл for
    for (let i = 0; i < numbers.length; i += 1) {
        let n = numbers[i] ** 3;
        sum += n;
    }
    console.log(sum); // 1158411

    // Через цикл for of
    sum = 0;
    console.log(numbers);
    for (let num of numbers) {
        let n = num ** 3;
        sum += n;
    }
    console.log(sum); // 1003904306910622800
}