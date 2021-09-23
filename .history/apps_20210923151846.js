const questionsArr = [
    {
        quest: "How many needles are in the bundle?",
        an: {
            a: "1",
            b: "2"
        }
    },
    {
        quest: "Blahasf?",
        an: {
            a: "trw",
            b: "fdb"
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
const nextBtn = document.querySelector('button');

let num = 0;

window.addEventListener('load', () => {
    
    let questVis = questionsArr[num];
    questCont.innerHTML = 
                `<section class="question-wrapper">
                    <div class="question">
                        <p>${questVis.quest}</p>
                    </div>
                    <div class="options">
                        <div class="answer"><p>${questVis.an.a}</p></div> 
                        <div class="answer><p>${questVis.an.b}</p></div>
                    </div>
                </section>
                `;

})

nextBtn.addEventListener('click', () => {
    num++;

    let questVis = questionsArr[num];
    questCont.innerHTML = 
                `<section class="question-wrapper">
                    <div class="question">${questVis.quest}</div>
                    <div class="options">${questVis.an.a} ${questVis.an.b}</div>
                </section>
                `;

})