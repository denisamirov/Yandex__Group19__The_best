const container = document.querySelector('.container__main');
const button = document.querySelector('.container__button')
const body = document.querySelector('body')

const name = document.querySelector('.name')
const sec_name = document.querySelector('.sec_name')

button.onclick = simplyKey

function simplyKey() {
    let a = document.createElement('div')
    a.classList.add('example-class')
    a.innerHTML = `<h1>Hello ${name.value}! Привет ${sec_name.value}</h1>`
    container.appendChild(a)
}
