// window.onload = () => alert("test")

function build(tag, ...classes) {
    var el = document.createElement("a");
    el.classList.add(classes);
    return el
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
function add_question(q, a) {
    var question_list = document.getElementById("questions");

    var question = build("div", "question");
    question.textContent = q;

    var answers = build("div", "answers");
    a.forEach(choice => {
        console.log(choice);
        var el = build("div", "choice")
        el.textContent = choice;
        answers.append(el);
    });

    var el = document.createElement("section");
    el.append(question);
    el.append(answers);
    console.log(el);

    question_list.append(el);
}

addEventListener("DOMContentLoaded", () => {
    add_question("Why did you buy bamboo?", [
        "for hitting people with", 
        "for planting",
        "for attaching to people",
        "just so I Have Bamboo",
        "also for hanging people off of",
    ]);

    add_question("choose one. there's only one correct answer.", [
        "tautline hitch", 
        "farrimond friction hitch",
    ]);

    add_question("“How did you get your name in the climbing server?", [
        "I picked it myself", 
        "it matches the 7 other puns in this series",
        "my profoundly equine qualities",
        "no idea, this is some random garbage someone thrust upon me",
    ]);
});
