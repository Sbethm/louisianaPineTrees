const questCont = document.querySelector('.questions-container');

questCont.innerHTML = 
    `<section class="question-block">
    <div class="question"></div>
    </section>
    <section class="question-block">
    <div class="question"></div>
    </section>
    <section class="question-block">
    <div class="question"></div>
    </section>
    <section class="question-block">
    <div class="question"></div>
    </section>
    <section class="question-block">
    <div class="question"></div>
    </section>`;

const questions = {
    1: {
        quest: "How many needles are in the bundle?"
        an: ""
    }
}