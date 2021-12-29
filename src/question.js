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
        .then()
    }
}

function addToLocalStorage(question) {
    localStorage.setItem('questions', JSON.stringify(question))
}