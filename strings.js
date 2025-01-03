function stringsFunction() {
    const myName = "Александр"
    const programmingLanguage = "JavaScript"
    const courseCreatorName = "Владилена Минина"
    const reasonText = "хочу хорошо зарабатывать"
    const numberOfMonth = "много"

    let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`

    console.log(myInfoText)

    myInfoText = myInfoText.replaceAll("JavaScript", "javascript")
    myInfoText = myInfoText.replaceAll("курс", "КУРС")

    console.log(myInfoText)
    console.log(myInfoText.length)
    console.log(myInfoText[0], myInfoText[myInfoText.length-1])
    // вызываем модальное окно пока текст введенный пользователем будет пустой строкой, пробелом или числом
    // так как нам нужны именно буквы имени
    let userName = null
    while (userName === null || !isNaN(userName) || userName === "") {
        userName = prompt('Как вас зовут?').toUpperCase().trim()
    }
    // вызываем модальное окно пока текст введенный пользователем будет пустой строкой, пробелом или буквами
    // так как нам нужны только числа и только больше 0 и меньше 100
    let userAge = null
    while (userAge === null || userAge === "" || isNaN(userAge) || (!isNaN(userAge) && (userAge < 1 || userAge > 99))) {
        userAge = prompt('Сколько вам лет?').trim()
    }
    alert(`Вас зовут ${userName} и вам ${userAge} лет`)
}

function stringsFunction2() {
    // вызываем модальное окно пока текст введенный пользователем будет пустой строкой или если его длинна меньше двух символов
    // чтобы можно было сделать срез
    let userString = null
    while (userString === null || userString.length < 2) {
        userString = prompt('Введите текст для обрезки').trim()
    }
    // вызываем модальное окно пока текст введенный пользователем будет пустой строкой, пробелом или буквами
    // так как нам нужны только числа и только больше 0 и меньше длинны строки
    let startSliceIndex = null
    while (startSliceIndex === null || startSliceIndex === "" || isNaN(startSliceIndex) || (!isNaN(startSliceIndex) && (startSliceIndex < 0 || startSliceIndex > userString.length))) {
        startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки').trim()
    }
    // вызываем модальное окно пока текст введенный пользователем будет пустой строкой, пробелом или буквами
    // так как нам нужны только числа и только больше первого индекса для среза и до бесконечности, чтобы пользователь не считал конец строки
    // а если захочет срезать до конца строки мог ввести любое значение превышающее длину строки
    let endSliceIndex = null
    while (endSliceIndex === null || endSliceIndex === "" || isNaN(endSliceIndex) || (!isNaN(endSliceIndex) && endSliceIndex < startSliceIndex)) {
        endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки').trim()
    }

    let string = userString.slice(startSliceIndex, endSliceIndex)
    alert(string)
}

function stringsFunction3() {
    // вызываем модальное окно пока текст введенный пользователем не будет содержать хотябы 2 слова, то есть иметь хотябы 1 пробел
    let userText = null
    while (userText === null || !userText.includes(' ')) {
        userText = prompt('Введите текст').trim()
    }
    // вызываем модальное окно пока текст введенный пользователем не будет содержаться в тексте введенным до этого, чтобы мы могли сделать срез в результате
    let wordFromText = null
    while (wordFromText === null || wordFromText === "" || !userText.includes(wordFromText)) {
        wordFromText = prompt('Введите слово из текста').trim()
    }

    let indexOfWord = userText.indexOf(wordFromText)
    let string = userText.slice(0, indexOfWord)
    alert(`Результат: ${string}`)
}