const questionsArr = [
    {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    }
];

const questCont = document.querySelector('.questions-container');
const quest = document.querySelector('.question');
const options = document.querySelector('.options');

window.addEventListener('load', () => {
    console.log('hi there!');

    

    const showQuest = () => {
        for(let i = 0; i < questionsArr.length - 1; i++) {
            let questVis = questionsArr[i];

            questCont.innerHTML = 
                `<section class="question-wrapper">
                    <div class="question"></div>
                    <div class="options"></div>
                </section>
                `;

        }
    }


})