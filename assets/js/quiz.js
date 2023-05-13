// window.onload = () => alert("test")

function build(tag, ...classes) {
    var el = document.createElement(tag);
    el.classList.add(classes);
    return el
}

class Answer {
    constructor(answer, initial=false, onclick=null) {
        this.answer = answer;
        this.dom_element = null;
        this.onclick_callback = onclick
    }

    get is_selected() {
        return this.dom_element.classList.contains("selected");
    }

    onclick(event) {
        this.dom_element.classList.toggle("selected");
        if (this.onclick_callback) {
            this.onclick_callback();
        }
    }

    build_dom() {
        var el = build("div", "choice")
        el.textContent = this.answer;
        this.dom_element = el;

        this.dom_element.addEventListener("click", event => this.onclick(event));

        return el;
    }
}

class Question {
    constructor(id, question, answers, initial=[], onclick=null) {
        this.id = id;
        this.question = question;
        this.answers = answers.map(answer => new Answer(answer));
    }

    get selected() {
        return this.answers.filter(choice => choice.is_selected());
    }

    get score() {

    }

    build_dom() {
        var el = document.createElement("section");

        var question = build("div", "question");
        question.textContent = this.question;
        el.append(question);

        var answers = build("div", "answers");
        this.answers.forEach(choice => {
            var el = choice.build_dom();
            answers.append(el);
        });
        el.append(answers);

        return el;
    }
}


function add_question(q) {
    var question_list = document.getElementById("questions");

    question_list.append(q.build_dom());
}

addEventListener("DOMContentLoaded", () => {
    var questions = [
        new Question(1, "Why did you buy bamboo?", [
            "for hitting people with", 
            "for planting",
            "for attaching to people",
            "just so I Have Bamboo",
            "also for hanging people off of",
        ]),

        new Question(2, "choose one. there's only one correct answer.", [
            "tautline hitch", 
            "farrimond friction hitch",
        ]),

        new Question(3, "How did you get your name in the climbing server?", [
            "I picked it myself", 
            "it matches the 7 other puns in this series",
            "my profoundly equine qualities",
            "no idea, this is some random garbage someone thrust upon me",
        ]),

    ];

    questions.forEach(add_question);

});
