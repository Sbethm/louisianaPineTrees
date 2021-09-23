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
    let 
    let questVis = questionsArr[0];
    questCont.innerHTML = 
                `<section class="question-wrapper">
                    <div class="question">${questVis.quest}</div>
                    <div class="options">${questVis.an.a} ${questVis.an.b}</div>
                </section>
                `;
        

    
    console.log('hi there!');

})