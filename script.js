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
    {
        "question": "Welche Automarke produziert den Mustang?",
        "answer_1": "Ford",
        "answer_2": "Chevrolet",
        "answer_3": "Dodge",
        "answer_4": "Jeep",
        "correctAnswer": 1
    },
    {
        "question": "Was ist der Hersteller des legendären '911' Sportwagens?",
        "answer_1": "Ferrari",
        "answer_2": "Porsche",
        "answer_3": "Lamborghini",
        "answer_4": "Audi",
        "correctAnswer": 2
    },
    {
        "question": "Welches Land hat den größten Automobilhersteller?",
        "answer_1": "Japan",
        "answer_2": "USA",
        "answer_3": "Deutschland",
        "answer_4": "China",
        "correctAnswer": 1
    },

    //Fragen zu Sprachen
    {
        "question": "Welche Sprache hat die meisten Muttersprachler auf der Welt?",
        "answer_1": "Mandarin",
        "answer_2": "Englisch",
        "answer_3": "Spanisch",
        "answer_4": "Hindi",
        "correctAnswer": 1
    },
    {
        "question": "Welche Sprache wird am meisten als Zweitsprache gesprochen?",
        "answer_1": "Englisch",
        "answer_2": "Französisch",
        "answer_3": "Spanisch",
        "answer_4": "Mandarin",
        "correctAnswer": 1
    },
    {
        "question": "In welchem Land wird Portugiesisch als Amtssprache gesprochen?",
        "answer_1": "Brasilien",
        "answer_2": "Spanien",
        "answer_3": "Portugal",
        "answer_4": "Mexiko",
        "correctAnswer": 3
    },
    {
        "question": "Welche Sprache gehört nicht zur slawischen Sprachfamilie?",
        "answer_1": "Polnisch",
        "answer_2": "Russisch",
        "answer_3": "Ungarisch",
        "answer_4": "Tschechisch",
        "correctAnswer": 3
    },
    {
        "question": "Welche Sprache wird in der Schweiz am meisten gesprochen?",
        "answer_1": "Deutsch",
        "answer_2": "Französisch",
        "answer_3": "Italienisch",
        "answer_4": "Rätoromanisch",
        "correctAnswer": 1
    },

    //Fragen zu Kochen
    {
        "question": "Welche Zutat ist die Basis für Guacamole?",
        "answer_1": "Avocado",
        "answer_2": "Kartoffel",
        "answer_3": "Tomate",
        "answer_4": "Banane",
        "correctAnswer": 1
    },
    {
        "question": "Welche Art von Nudeln wird traditionell für Spaghetti verwendet?",
        "answer_1": "Fusilli",
        "answer_2": "Linguine",
        "answer_3": "Tagliatelle",
        "answer_4": "Spaghetti",
        "correctAnswer": 4
    },
    {
        "question": "Welche Zutat wird hauptsächlich in der indischen Küche als Gewürz verwendet?",
        "answer_1": "Koriander",
        "answer_2": "Oregano",
        "answer_3": "Rosmarin",
        "answer_4": "Basilikum",
        "correctAnswer": 1
    },
    {
        "question": "Was ist das Hauptbestandteil von Paella, einem traditionellen spanischen Gericht?",
        "answer_1": "Hühnchen",
        "answer_2": "Rindfleisch",
        "answer_3": "Schweinefleisch",
        "answer_4": "Reis",
        "correctAnswer": 4
    },
    {
        "question": "Welche Zutat gibt dem Gericht Risotto seine cremige Konsistenz?",
        "answer_1": "Quinoa",
        "answer_2": "Arborio Reis",
        "answer_3": "Bulgur",
        "answer_4": "Couscous",
        "correctAnswer": 2
    },
    //Fragen zu Politik
    {
        "question": "Wer ist der aktuelle Präsident der Vereinigten Staaten?",
        "answer_1": "Joe Biden",
        "answer_2": "Donald Trump",
        "answer_3": "Barack Obama",
        "answer_4": "George W. Bush",
        "correctAnswer": 1
    },
    {
        "question": "Was ist die Hauptstadt von Deutschland?",
        "answer_1": "München",
        "answer_2": "Berlin",
        "answer_3": "Frankfurt",
        "answer_4": "Hamburg",
        "correctAnswer": 2
    },
    {
        "question": "Welches Land hat den längsten Regierungssitz der Welt?",
        "answer_1": "Vereinigte Staaten",
        "answer_2": "Russland",
        "answer_3": "China",
        "answer_4": "Indien",
        "correctAnswer": 1
    },
    {
        "question": "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
        "answer_1": "Konrad Adenauer",
        "answer_2": "Wilhelm Pieck",
        "answer_3": "Helmut Kohl",
        "answer_4": "Willy Brandt",
        "correctAnswer": 1
    },
    {
        "question": "In welchem Jahr fand die Französische Revolution statt?",
        "answer_1": "1789",
        "answer_2": "1815",
        "answer_3": "1830",
        "answer_4": "1848",
        "correctAnswer": 1
    }
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