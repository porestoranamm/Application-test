import './styles.css'
import {isValid} from './utils'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')


form.addEventListener('submit', submitFormHandler)

function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitBtn.disabled = true
        // Async request to server to save question
        console.log('Question, question')
        input.value = ''
    }
}