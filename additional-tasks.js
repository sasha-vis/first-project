function additionalTask() {
    const javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
    
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
    console.log(`Symbol: ${slicedString[Math.floor((slicedString.length-1)/2)]}\nString: ${slicedString}`)
}

// Создаем переменную с валютой, которую будем выводить в строке
// Частая практика, так как валюта может измениться
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

function additionalTask2() {
    let clientName = null

    // Запускаем цикл для ввода строки по условию если clientName равен null
    // Мы изначально ему присвоили null чтобы войти в цикл, а также мы ему присваиваем null
    // если имя невалидное, чтобы снова войти в цикл
    // Также ему по умолчанию присвоится undefined если нажмем кнопку Отмена
    while (!clientName) {

        // Получаем строку и обрезаем пробелы
        clientName = prompt('Введите ваше имя:')?.trim()

        // Выходим так как пользователь нажал Отмена, потому что null?.trim() === undefined
        if (clientName === undefined) return alert(`До свидания!`)

        // Если имя меньше 2 символов или больше 10 или в имени есть цифры или
        // нету первой буквы заглавной - присвоем имени null чтобы перейти к следующей итерации по циклу
        if (clientName.length < 2 || clientName.length > 10 || !/^[A-ZА-Я]/.test(clientName) || /\d/.test(clientName)) {
            alert('Имя не удовлетворяет условиям! Попробуйте еще раз.\nВы должны написать только "Имя" с заглавной буквы, а также не использовать цифры. Длина имени должна быть не меньше 2 символов и не превышать 10.')
            clientName = null
            continue
        }
    }

    // Присвоим в переменную client найденного клиента по имени из массива клиентов
    const client = clients.find(client => client.clientName === clientName)

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
            
        // Запустим цикл для проверки на число или falsy значение, например пустую строку
        // Если нажмем Отмена, то выйдем из цикла
        while (!orderSum || isNaN(orderSum)) {
            orderSum = prompt('Введите сумму для заказа', 25)?.trim()
            if (orderSum === undefined) return alert(`До свидания, ${client.clientName}!`)
        }
    
        // Присваиваем сегодняшнюю оплату со скидкой в переменную
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
    
        alert(`Спасибо, ${client.clientName}! К оплате ${client.clientSpentToday}${currency}.\nЗа все время в нашем ресторане вы потратили ${client.clientSpentForAllTime}${currency}. Ваша скидка на будущую покупку теперь составляет ${client.discount}%.\nБудем рады видеть вас снова!`)
    }
}

function additionalTask3() {
    let password = null

    while (!password) {

        // Пользователь вводит пароль и сразу обрезаем пробелы
        // Если пользователь нажмет Отмена, будет null, но мы сразу делаем ?.trim()
        // null?.trim() === undefined
        password = prompt('Введите пароль:')?.trim()

        // Выходим так как пользователь нажал Отмена
        if (password === undefined) return alert(`До свидания!`)

        // Если длина строки меньше 3 или больше 30 
        // или в строке нету хоть одной латинской заглавной буквы или в строке нету хоть одной цифры,
        // то присваиваем паролю null и переходим к следующей итерации по циклу
        if (password.length < 3 || password.length > 30 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
            alert('Пароль не удовлетворяет условиям!\nПароль должен содержать хотя бы одну заглавную букву и одну цифру, а также длина пароля не должна быть меньше 3 символов и не должна превышать 30 символов.\nПопробуйте еще раз.')
            password = null
            continue
        }
        
        alert('Пароль валидный. Добро пожаловать в аккаунт!')
    }
}