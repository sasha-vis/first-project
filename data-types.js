function dataTypesFunc() {
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

    console.log(string, typeof string)
    console.log(number, typeof number)
    console.log(boolean, typeof boolean)
    console.log(object, typeof object)
    console.log(null_variable, typeof null_variable)
    console.log(undefined, typeof undefined)
    console.log(symbol, typeof symbol)
    console.log(bigint, typeof bigint)


    let string2 = 'Строка'
    let number2 = 5
    let boolean2 = true
    string2 = 5
    number2 = 'Строка'
    boolean2 = null

    alert(string2)
    alert(number2)
    alert(boolean2)


    let ageOfPerson1 = 18
    let ageOfPerson2 = '20'
    ageOfPerson2 = ageOfPerson1
    console.log(ageOfPerson2, typeof ageOfPerson2)

    let nameOfAnimal1 = null
    let nameOfAnimal2 = 'Charlie'
    nameOfAnimal2 = nameOfAnimal1
    console.log(nameOfAnimal2, typeof nameOfAnimal2)

    const bestProgrammingLanguage1 = 'JavaScript'
    const bestProgrammingLanguage2 = 'Java'
    console.log('Переменную с const переопределить нельзя')
    console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1)
    console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2)

    let initialValue1
    let initialValue2 = 0
    initialValue2 = initialValue1
    console.log(initialValue2, typeof initialValue2)

    let isJavaScriptProgrammer1 = true
    console.log('var является устаревшим')
    let isJavaScriptProgrammer2 = false
    console.log('var является устаревшим')
    isJavaScriptProgrammer2 = isJavaScriptProgrammer1
    console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)

    let helloText1 = 'Hello!'
    let helloText2 = 'Привет!'
    helloText2 = helloText1
    console.log(helloText2, typeof helloText2)
}