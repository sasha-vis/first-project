const buttons_wrapper = document.querySelector('.buttons-wrapper')

buttons_wrapper.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        switch(event.target.dataset.id) {
            case 'task2':
                task2StartFunc()
                break
            case 'task3':
                task3StartFunc()
                break
            case 'task4':
                task4StartFunc()
                break
            default:
                break
        }
    }
})



function task2StartFunc() {
    console.log("Запускаем таймер")
    for (let i = 5; i >= 0; i--) {
        alert(i)
    }
    console.log("Обратный отсчет закончен")
}

function task3StartFunc() {
    //Кто разработал язык программирования JavaScript?
    alert("Брендан Эйх в компании Netscape")
    //За сколько дней был разработан JavaScript?
    alert("10 дней")
    //В каком году появился JavaScript?
    alert("1995")
    //JavaScript — это то же самое, что и Java? (отвечайте либо «JavaScript — это Java», либо «JavaScript — это не Java»)
    alert("JavaScript — это не Java")
    //Как называется спецификация JavaScript?
    alert("ECMAScript (ES)")
}

function task4StartFunc() {
    prompt("Сколько будет 2 + 2?")
    alert("Ответ: если ты ответил 4, то ты прав.")

    prompt("Чему равен корень из 9?")
    alert("Ответ: если ты ответил 3, то ты прав.")

    prompt("Сколько будет 2 в 5-й степени?")
    alert("Ответ: если ты ответил 32, то ты прав.")
}