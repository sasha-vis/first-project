function comparisonOperatorsFunction() {
    const existingUserLogin = "the_best_user"
    const existingUserPassword = "12345678"

    let userLogin = prompt("Введите логин")?.trim()
    let userPassword = prompt("Введите пароль")?.trim()

    if (userLogin === existingUserLogin && userPassword === existingUserPassword) {
        alert(`Добро пожаловать, ${userLogin}!`)
    } else {
        alert("Логин и (или) Пароль введены неверно!")
    }
}

function comparisonOperatorsFunction2() {
    const questions = {
        "Сколько будет 2 + 2?": 4,
        "Сколько будет 2 * 2?": 4,
        "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?": 1,
        "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?": 12,
        "Сколько будет 2 + 2 * 2?": 6
    }
    let correctAnswers = 0
    let incorrectAnswers = 0

    for (let question in questions) {
        let answer = prompt(question)
        if (Number(answer) === questions[question]) {
            alert("Ответ Верный")
            correctAnswers++
        } else {
            alert("Ответ Неверный")
            incorrectAnswers++
        }
    }
    alert(`Конец теста!\nПравильные ответы — ${correctAnswers};\nНеправильные ответы — ${incorrectAnswers}.`)
}

function comparisonOperatorsFunction3() {
    const questions = {
        "JavaScript появился в 1995 году?": true,
        "Спецификация JavaScript называется ECMAScript?": true,
        "JavaScript был создан за 1 месяц?": false
    }

    for (let question in questions) {
        confirm(question) === questions[question] ? alert("Верно") : alert(questions[question])
    }


}