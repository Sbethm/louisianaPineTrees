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
const nextbtn = document.querySelector('button');

window.addEventListener('load', () => {
    
    let num = 0;
    let questVis = questionsArr[num];
    questCont.innerHTML = 
                `<section class="question-wrapper">
                    <div class="question">${questVis.quest}</div>
                    <div class="options">${questVis.an.a} ${questVis.an.b}</div>
                </section>
                `;
        
    nextbtn.addEventListener('click', ())

})