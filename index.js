const buttons_wrapper = document.querySelector('.buttons-wrapper')

buttons_wrapper.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        const taskFunc = window[event.target.dataset.id]
        if (typeof taskFunc === 'function') taskFunc()
    }
}