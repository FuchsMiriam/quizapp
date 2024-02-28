let questions = [
    //Fragen zu Autos
    {
        "question": "Welches Auto war das meistverkaufte Modell aller Zeiten?",
        "answer_1": "Volkswagen Golf",
        "answer_2": "Toyota Corolla",
        "answer_3": "Ford F-Serie",
        "answer_4": "Honda Civic",
        "correctAnswer": 2
    },
    {
        "question": "Was bedeutet das Kürzel 'SUV'?",
        "answer_1": "Sport Utility Vehicle",
        "answer_2": "Special Utility Vehicle",
        "answer_3": "Superior Utility Vehicle",
        "answer_4": "Standard Utility Vehicle",
        "correctAnswer": 4
    },

]


let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else {
        let question = questions[currentQuestion];

        document.getElementById('currentNumber').innerHTML = currentQuestion + 1;

        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); // Diese Zeile extrahiert die letzte Ziffer aus der Auswahl (selection). Es wird angenommen, dass die Auswahl eine Zeichenfolge ist und dass die letzte Ziffer die Nummer der ausgewählten Antwort auf die Frage ist.


    let idOfCorrectAnswer = `answer_${question['correctAnswer']}`;

    if (selectedQuestionNumber == question['correctAnswer']) //Die Bedingung if (selectedQuestionNumber == question['correct_answer']) {...} vergleicht die ausgewählte Antwort (durch die extrahierte letzte Ziffer) mit der richtigen Antwort (correct_answer) der aktuellen Frage. Wenn sie übereinstimmen, wird der Code im ersten Block nach dem if ausgeführt.
    {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfCorrectAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('questionButton').disabled = false;
}


function showNextQuestion() {
    currentQuestion++; // z. B. von 0 auf 1
    document.getElementById('questionButton').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function showEndScreen() {
    document.getElementById('endScreen').innerHTML = `
    <div class="endScreen">
    <img class="imageEndScreen mb-2" src="./img/brainResult.png" alt="Ergebnis">
    <span class="completedText"><b>Completed Quiz</b></span>
    <span class="scoreText"><b>Your Score</b></span>
    <button class="btn btn-primary mb-2 buttonStyle">Share</button>
    <a class="endScreenLink" href="index.html">Replay</a>
    </div>
    <div class="trophy">
    <img class="trophyEndScreen mb-2" src="./img/trophy.png" alt="Trophäe">
    </div>
`;
}