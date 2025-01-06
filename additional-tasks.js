function additionalFunction() {
    let javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
    
    // Создаем переменную и присваиваем ей срез строки javaScriptDescription
    // начиная от первого символа и заканчивая символом по середине строки,
    // используем функцию floor для округления вниз
    let slicedString = javaScriptDescription.slice(0, Math.floor((javaScriptDescription.length-1)/2))
    
    // Заменяем все строчные буквы "а" (кириллицу и латинские) на прописные,
    // а также убираем все пробелы в строке
    slicedString = slicedString.replaceAll('а', 'А').replaceAll('a', 'A').replaceAll(' ', '')
    
    // Повторяем строку 3 раза
    slicedString = slicedString.repeat(3)
    
    // Выводим символ который ровно по середине строки и саму строку
    console.log(slicedString[Math.floor((slicedString.length-1)/2)])
    console.log(slicedString)
}

// Создаем переменную с валютой, которую будем выводить в строке, обычно используется если валюта изменится
const currency = '$'

// Массив объектов, каждый объект это клиент с информацией о нем
// Нужен для добавления клиентов и входу по имени в additionalFunction2
const clients = [
    {
        clientName: "Никита",
        clientSpentForAllTime: 60,
        clientSpentToday: 0,
        discount: 0
    },
    {
        clientName: "Саша",
        clientSpentForAllTime: 110,
        clientSpentToday: 0,
        discount: 10
    },
    {
        clientName: "Костя",
        clientSpentForAllTime: 360,
        clientSpentToday: 0,
        discount: 20
    },
    {
        clientName: "Аня",
        clientSpentForAllTime: 870,
        clientSpentToday: 0,
        discount: 30
    }
]

function additionalFunction2() {
    let clientName = null

    // Запускаем цикл для ввода строки по условию если clientName равен null
    // Мы изначально ему присвоили null чтобы войти в цикл, а также мы ему присваиваем null
    // если имя невалидное, чтобы снова войти в цикл
    // Также ему по умолчанию присвоится null если нажмем кнопку Отмена
    do {
        clientName = prompt('Введите ваше имя:')

        // В случае с нажатием кнопки Отмена - мы выйдем из функции
        if (clientName === null) return alert(`До свидания!`)

        // Убираем пробелы
        clientName = clientName.trim()

        // Если имя больше меньше 2 символов или больше 10 или в имени есть цифры или
        // нету первой буквы заглавной - присвоем имени null чтобы перейти к следующей итерации по циклу
        if (clientName.length < 2 || clientName.length > 10 || !/^[A-ZА-Я]/.test(clientName) || /\d/.test(clientName)) {
            alert('Имя не удовлетворяет условиям! Попробуйте еще раз.\nВы должны написать только "Имя" с заглавной буквы, а также не использовать цифры. Длина имени должна быть не меньше 2 символов и не превышать 10.')
            clientName = null
            continue
        }

        // Присвоим в переменную client найденного клиента по имени из массива клиентов
        let client = clients.find(client => client.clientName === clientName)

        // Если такого клиента нет, то можем создать нового добавив новый объект в массив клиентов подтвердив действие
        // Запишется новый клиент с новым именим с нулевыми данными
        // А если есть найденый клиент, то продолжим задачу с ним
        if (!client) {
            if (!confirm('Такого клиента нет, хотите создать нового?')) return alert(`До свидания!`)
            clients.push({ clientName: clientName, clientSpentForAllTime: 0, clientSpentToday: 0, discount: 0 })
            alert(`Новый клиент ${clientName} успешно добавлен!`)
        } else {

            // Можем выйти из функции нажав Отмена
            if (!confirm(`Здравствуйте, ${client.clientName}! Вам предоставляется скидка в ${client.discount}%!\nХотите сделать заказ?`)) return alert(`До свидания, ${client.clientName}!`)

            let orderSum = null

            // Запустим цикл для ввода чисел, нельзя вводить что то другое
            // Также если нажмем Отмена, то выйдет из функции
            do {
                orderSum = prompt('Введите сумму для заказа', 25)
                if (orderSum === null) return alert(`До свидания, ${client.clientName}!`)

                // Убираем пробелы
                orderSum = orderSum.trim()
            } while (!orderSum || isNaN(orderSum))
        
            // Присваиваем сегодняшнюю опату в переменную по скидке, которая есть
            // А также прибавляем потраченую сумму в переменную clientSpentForAllTime
            client.clientSpentToday = Number(orderSum) * (1 - client.discount / 100)
            client.clientSpentForAllTime += client.clientSpentToday
        
            // Добавляем новую скидку в зависимости от потраченой суммы за все время
            if (client.clientSpentForAllTime > 100 && client.clientSpentForAllTime < 300) {
                client.discount = 10
            } else if (client.clientSpentForAllTime > 300 && client.clientSpentForAllTime < 500) {
                client.discount = 20
            } else if (client.clientSpentForAllTime > 500) {
                client.discount = 30
            }
        
            // Завершаем задачу
            alert(`Спасибо, ${client.clientName}! К оплате ${client.clientSpentToday}${currency}.\nЗа все время в нашем ресторане вы потратили ${client.clientSpentForAllTime}${currency}. Ваша скидка на будущую покупку теперь составляет ${client.discount}%.\nБудем рады видеть вас снова!`)
        }

    } while (!clientName)
}

function additionalFunction3() {
    let password = null

    // запускаем цикл для ввода строки по условию если password равен null
    // мы изначально ему присвоили null чтобы войти в цикл, а также мы ему присваиваем null
    // если пароль невалидный, чтобы снова войти в цикл
    // также ему по умолчанию присвоится null если нажмем кнопку Отмена
    do {
        password = prompt('Введите пароль:')

        // В случае с нажатием кнопки Отмена - мы выйдем из функции
        if (password === null) return alert(`До свидания!`)
        
        // убираем пробелы
        password = password.trim()

        // если пароль больше меньше 3 символов или больше 30 или в пароле нету цифры или нету заглавной буквы
        // присвоем паролю null чтобы перейти к следующей итерации по циклу
        if (password.length < 3 || password.length > 30 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
            alert('Пароль не удовлетворяет условиям!\nПароль должен содержать хотя бы одну заглавную букву и одну цифру, а также длина пароля не должна быть меньше 3 символов и не должна превышать 30 символов.\nПопробуйте еще раз.')
            password = null
            continue
        }

        // если дошли сюда - значит все ОК
        alert('Пароль валидный. Добро пожаловать в аккаунт!')
    } while (!password)
}