const arrayCalc = ['(', ')','AC', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

let button
let line

document.querySelector('body');


const contentCalc = document.createElement('div');
contentCalc.className = 'contentCalc card'

document.body.appendChild(contentCalc);

const resultsBox = document.createElement('div')
resultsBox.className = 'resultsBox'

const inputCalc = document.createElement('div');
inputCalc.className = 'inputCalc'

const displayResults = document.createElement('div');
displayResults.className = 'displayResults'

document.body.appendChild(contentCalc);
contentCalc.appendChild(resultsBox);
resultsBox.appendChild(inputCalc);
resultsBox.appendChild(displayResults);




for (let i = 0; i < arrayCalc.length; i++) {
    button = document.createElement('div')
    button.textContent = arrayCalc[i]
    button.className = 'button is-primary is-inverted has-text-weight-bold'

    //styling the buttons 
    if (i <= 3) {
        button.className = 'button operators'
    }

    if ((i === 7) || (i === 11) || (i === 15)) {
        button.className = 'button operators'
    }

    if (i === 18) {
        button.className = 'button is-primary operators buttonEqual'
    }

    if (i % 4 === 0) {
        line = document.createElement('div')
        line.className = 'line'
    }

// functions for result - doesn t work yet
// function calcResults() {
//     return inputCalc.textContent
        
// } 

    let calculate = arrayCalc[i];
    switch (calculate) {

        case 'AC':
            button.addEventListener('click', function () {
                inputCalc.textContent = "";
                displayResults.textContent = "";
            });
            break;
        
        case '%':
            button.addEventListener('click', function() {
               inputCalc.textContent * (0.01);
            });
            break;

        case '=':
            button.addEventListener('click', function () {
                displayResults.textContent = Function('return ' + inputCalc.textContent)();
                // displayResults.textContent += ""
                // displayResults.textContent += displayResults.textContent=Function('return ' + displayResults.textContent)();
                // console.log(resultsAll);
            });
            break;


        default:
            button.addEventListener('click', function () {
                inputCalc.textContent += arrayCalc[i];
                displayResults.textContent += arrayCalc[i];

            });

    };
    contentCalc.appendChild(line);
    line.appendChild(button);

}