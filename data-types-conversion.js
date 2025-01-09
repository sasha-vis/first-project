function dataTypesTask2() {
    const string = "Строка"
    const number = 5
    const boolean = true
    const object = {
        a: "1",
        b: 2
    }
    const null_variable = null
    const undefined_variable = undefined
    const symbol = Symbol('id')
    const bigint = BigInt(10)

    console.log(Number(string), Boolean(string), String(string))
    console.log(Number(number), Boolean(number), String(number))
    console.log(Number(boolean), Boolean(boolean), String(boolean))
    console.log(Number(object), Boolean(object), String(object))
    console.log(Number(null_variable), Boolean(null_variable), String(null_variable))
    console.log(Number(undefined_variable), Boolean(undefined_variable), String(undefined_variable))
    console.log(/*Number(symbol), - ошибка*/Boolean(symbol), String(symbol))
    console.log(Number(bigint), Boolean(bigint), String(bigint))
}

function dataTypesTask3() {
    console.log(Number('10'), typeof Number('10')) // явное
    //1
    console.log(+'50', typeof +'50') // неявное
    //2
    console.log(Number('100'), typeof Number('100')) // явное
    //3
    console.log('' + 1, typeof '' + 1) // неявное
    //4
    console.log(String(1), typeof String(1)) // явное
    //5
    console.log(Boolean(0), typeof Boolean(0)) // явное
    //6
    console.log(+'001', typeof +'001') // неявное
    //7
    console.log(1 + '', typeof 1 + '') // неявное
    //8
    console.log(Boolean(1), typeof Boolean(1)) // явное
    //9
    console.log(String(001), typeof String(001)) // явное
    //10
    console.log(Number('Hello World'), typeof Number('Hello World')) // явное


    console.log('---------------')

    console.log(String(console.log), Number(console.log), Boolean(console.log))
    console.log(String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }))
    console.log(String(Symbol('key'))/*, Number(Symbol('key')) - ошибка*/, Boolean(Symbol('key')))
    console.log(String(Number), Number(Number), Boolean(Number))
    console.log(String(''), Number(''), Boolean(''))
    console.log(String(0), Number(0), Boolean(0))
    console.log(String(-10), Number(-10), Boolean(-10))
    console.log(String('-105'), Number('-105'), Boolean('-105'))


    console.log('---------------')

    // 1
    console.log(Number(' 1 2 3 4 5')); // NaN
    // 2
    console.log(Number('1234 5')); // NaN
    // 3
    console.log(Number('12345')); // 12345
    // 4
    console.log(String(false)); // 'false'
    // 5
    console.log(Boolean(0000000)); // false
    // 6
    console.log(Boolean(0.0000001)); // true
    // 7
    console.log(String(undefined)); // 'undefined'
    // 8
    console.log(Number('100f')); // NaN
    // 9
    console.log(Number('100')); // 100
    // 10
    console.log(Number('000001')); // 1
}