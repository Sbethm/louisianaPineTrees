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

const questCont = document.querySelector('.questions-container');


questCont.innerHTML = 
    `<section class="question-wrapper">
        <div class="question"></div>
        <div class="options"></div>
    </section>
    `;

const quest = document.querySelector('.question');
const options = document.querySelector('.options');

window.addEventListener('load', () => {
    console.log('hi there!');

    
})