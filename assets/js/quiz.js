// window.onload = () => alert("test")

function build(tag, ...classes) {
    var el = document.createElement(tag);
    el.classList.add(classes);
    return el
}

class Question {
    constructor(id, question, answers) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        // other things: (initial) selection, onclick callback
    }
  }

// example output structure of this function:
/* 
<section>
    <div class="question">Why did you buy bamboo?</div>
    <div class="answers">
        <div class="choice">for hitting people with</div>
        <div class="choice">for planting</div>
        <div class="choice">for attaching to people</div>
        <div class="choice">just so I Have Bamboo</div>
        <div class="choice">also for hanging people off of</div>
    </div>
</section> 
*/
function add_question(q) {
    var question_list = document.getElementById("questions");

    var question = build("div", "question");
    question.textContent = q.question;

    var answers = build("div", "answers");
    q.answers.forEach(choice => {
        var el = build("div", "choice")
        el.textContent = choice;
        answers.append(el);
    });

    var el = document.createElement("section");
    el.append(question);
    el.append(answers);

    question_list.append(el);
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
