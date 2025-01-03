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
            case 'data-types-task':
                dataTypesFunc()
                break
            case 'data-types-conversion-task':
                dataTypesConversionFunc()
                break
            case 'data-types-conversion-task2':
                dataTypesConversionFunc2()
                break
            case 'strings-task':
                stringsFunction()
                break
            case 'strings-task2':
                stringsFunction2()
                break
            case 'strings-task3':
                stringsFunction3()
                break
            default:
                break
        }
    }
})