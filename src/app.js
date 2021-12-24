import './styles.css'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submit = form.querySelector('#submit')


form.addEventListener('submit', submitFormHandler)

function submitFormHandler(event) {
    event.preventDefault()

    console.log(input.value)
}