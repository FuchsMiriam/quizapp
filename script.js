let questions = [
    //Fragen zu Autos
    {
        "question": "Welches Auto war das meistverkaufte Modell aller Zeiten?",
        "answer_1": "Volkswagen Golf",
        "answer_2": "Toyota Corolla",
        "answer_3": "Ford F-Serie",
        "answer_4": "Honda Civic",
        "correctAnswer": "Toyota Corolla"
    },
    {
        "question": "Was bedeutet das Kürzel 'SUV'?",
        "answer_1": "Sport Utility Vehicle",
        "answer_2": "Special Utility Vehicle",
        "answer_3": "Superior Utility Vehicle",
        "answer_4": "Standard Utility Vehicle",
        "correctAnswer": "Sport Utility Vehicle"
    },
    {
        "question": "Welche Automarke produziert den Mustang?",
        "answer_1": "Ford",
        "answer_2": "Chevrolet",
        "answer_3": "Dodge",
        "answer_4": "Jeep",
        "correctAnswer": "Ford"
    },
    {
        "question": "Was ist der Hersteller des legendären '911' Sportwagens?",
        "answer_1": "Ferrari",
        "answer_2": "Porsche",
        "answer_3": "Lamborghini",
        "answer_4": "Audi",
        "correctAnswer": "Porsche"
    },
    {
        "question": "Welches Land hat den größten Automobilhersteller?",
        "answer_1": "Japan",
        "answer_2": "USA",
        "answer_3": "Deutschland",
        "answer_4": "China",
        "correctAnswer": "Japan"
    },

    //Fragen zu Sprachen
    {
        "question": "Welche Sprache hat die meisten Muttersprachler auf der Welt?",
        "answer_1": "Mandarin",
        "answer_2": "Englisch",
        "answer_3": "Spanisch",
        "answer_4": "Hindi",
        "correctAnswer": "Mandarin"
    },
    {
        "question": "Welche Sprache wird am meisten als Zweitsprache gesprochen?",
        "answer_1": "Englisch",
        "answer_2": "Französisch",
        "answer_3": "Spanisch",
        "answer_4": "Mandarin",
        "correctAnswer": "Englisch"
    },
    {
        "question": "In welchem Land wird Portugiesisch als Amtssprache gesprochen?",
        "answer_1": "Brasilien",
        "answer_2": "Spanien",
        "answer_3": "Portugal",
        "answer_4": "Mexiko",
        "correctAnswer": "Portugal"
    },
    {
        "question": "Welche Sprache gehört nicht zur slawischen Sprachfamilie?",
        "answer_1": "Polnisch",
        "answer_2": "Russisch",
        "answer_3": "Ungarisch",
        "answer_4": "Tschechisch",
        "correctAnswer": "Ungarisch"
    },
    {
        "question": "Welche Sprache wird in der Schweiz am meisten gesprochen?",
        "answer_1": "Deutsch",
        "answer_2": "Französisch",
        "answer_3": "Italienisch",
        "answer_4": "Rätoromanisch",
        "correctAnswer": "Deutsch"
    },

    //Fragen zu Kochen
    {
        "question": "Welche Zutat ist die Basis für Guacamole?",
        "answer_1": "Avocado",
        "answer_2": "Kartoffel",
        "answer_3": "Tomate",
        "answer_4": "Banane",
        "correctAnswer": "Avocado"
    },
    {
        "question": "Welche Art von Nudeln wird traditionell für Spaghetti verwendet?",
        "answer_1": "Fusilli",
        "answer_2": "Linguine",
        "answer_3": "Tagliatelle",
        "answer_4": "Spaghetti",
        "correctAnswer": "Spaghetti"
    },
    {
        "question": "Welche Zutat wird hauptsächlich in der indischen Küche als Gewürz verwendet?",
        "answer_1": "Koriander",
        "answer_2": "Oregano",
        "answer_3": "Rosmarin",
        "answer_4": "Basilikum",
        "correctAnswer": "Koriander"
    },
    {
        "question": "Was ist das Hauptbestandteil von Paella, einem traditionellen spanischen Gericht?",
        "answer_1": "Hühnchen",
        "answer_2": "Rindfleisch",
        "answer_3": "Schweinefleisch",
        "answer_4": "Reis",
        "correctAnswer": "Reis"
    },
    {
        "question": "Welche Zutat gibt dem Gericht Risotto seine cremige Konsistenz?",
        "answer_1": "Quinoa",
        "answer_2": "Arborio Reis",
        "answer_3": "Bulgur",
        "answer_4": "Couscous",
        "correctAnswer": "Arborio Reis"
    },
    //Fragen zu Politik
    {
        "question": "Wer ist der aktuelle Präsident der Vereinigten Staaten?",
        "answer_1": "Joe Biden",
        "answer_2": "Donald Trump",
        "answer_3": "Barack Obama",
        "answer_4": "George W. Bush",
        "correctAnswer": "Joe Biden"
    },
    {
        "question": "Was ist die Hauptstadt von Deutschland?",
        "answer_1": "München",
        "answer_2": "Berlin",
        "answer_3": "Frankfurt",
        "answer_4": "Hamburg",
        "correctAnswer": "Berlin"
    },
    {
        "question": "Welches Land hat den längsten Regierungssitz der Welt?",
        "answer_1": "Vereinigte Staaten",
        "answer_2": "Russland",
        "answer_3": "China",
        "answer_4": "Indien",
        "correctAnswer": "Vereinigte Staaten"
    },
    {
        "question": "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
        "answer_1": "Konrad Adenauer",
        "answer_2": "Wilhelm Pieck",
        "answer_3": "Helmut Kohl",
        "answer_4": "Willy Brandt",
        "correctAnswer": "Konrad Adenauer"
    },
    {
        "question": "In welchem Jahr fand die Französische Revolution statt?",
        "answer_1": "1789",
        "answer_2": "1815",
        "answer_3": "1830",
        "answer_4": "1848",
        "correctAnswer": "1789"
    }
]


let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
