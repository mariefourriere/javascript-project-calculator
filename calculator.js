const arrayCalc = ["(", ")", '%', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];


let button
let line

document.querySelector('body');

const contentCalc = document.createElement('div');
contentCalc.className = 'contentCalc card'
document.body.appendChild(contentCalc);

const input = document.createElement('input');
input.className = 'input is-primary'
input.type = 'text'
input.placeholder = '0'

const results = document.createElement('div');
results.className = 'results'

contentCalc.appendChild(results);

for (let i = 0; i < arrayCalc.length; i++) {
    button = document.createElement('div')
    button.textContent = arrayCalc[i]
    button.className = 'button'

    if (i <= 3){
        button.className = 'button operators'
    }

    if ((i === 7) || (i === 11) || (i === 15) || (i === 19)) {
        button.className = 'button operators'
    }

    if (i === 18){
        button.className = 'button is-primary operators'
    }
    
    if (i % 4 === 0) {
        line = document.createElement('div')
        line.className = 'line'
    }

    
    results.appendChild(input);
    contentCalc.appendChild(line);
    line.appendChild(button);
}



