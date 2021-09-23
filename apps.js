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
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    2: {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    3: {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    4: {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    5: {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    }
};

document.addEventListener('load', () => {
    
})