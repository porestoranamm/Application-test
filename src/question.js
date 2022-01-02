class Question {
    static create(question) {
        fetch('https://application-podcast-app-default-rtdb.europe-west1.firebasedatabase.app/question.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Conten-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            question.id = response.name
            return question
        })
        .then(addToLocalStorage)
        .then(Question.renderList)
    }

    static renderList() {
        const questions = getQuestionsFromLocalStorage()

        const html = questions.length
        ? questions.map(toCard).join('')
        : `<div class="mui--text-headline">Вы пока ничего не спрашивали</div>`
    }
}

function addToLocalStorage(question) {
    const all = getQuestionsFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(question))
}

function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question) {

}