const arrayCalc = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+']

console.log(arrayCalc)

let button
let line

document.querySelector('body');

const contentCalc = document.createElement('div');
contentCalc.className = 'contentCalc card'

document.body.appendChild(contentCalc);

const results = document.createElement('div');
results.className = 'displayResults'

const inputResults = document.createElement('div');


contentCalc.appendChild(results);
results.appendChild(inputResults);



for (let i = 0; i < arrayCalc.length; i++) {
    button = document.createElement('div')
    button.textContent = arrayCalc[i]
    button.className = 'button is-primary is-inverted has-text-weight-bold'

    //styling the buttons 
    if (i <= 3) {
        button.className = 'button operators'
    }

    if ((i === 7) || (i === 11) || (i === 15) || (i === 19)) {
        button.className = 'button operators'
    }

    if (i === 18) {
        button.className = 'button is-primary operators'
    }

    if (i % 4 === 0) {
        line = document.createElement('div')
        line.className = 'line'
    }

    
    function resultsAll() {
        return inputResults.textContent;
        
    } 

    let calculate = arrayCalc[i];
    switch (calculate) {

        case 'AC':
            button.addEventListener('click', function () {
                inputResults.textContent = "";
            });
            break;

        case '=':
            button.addEventListener('click', function () {
                inputResults.textContent = resultsAll()

                console.log(resultsAll);
            });
            break;


        default:
            button.addEventListener('click', function () {
                inputResults.textContent += arrayCalc[i];

            });

    };
    contentCalc.appendChild(line);
    line.appendChild(button);

}