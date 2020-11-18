const arrayCalc = ['(', ')', 'AC', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

let button
let line
let noDoubleDots = false
let afterResults = false

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



document.body.addEventListener('keypress', function (e) {
    if (e.code === "Enter") {
        displayResults.innerHTML = Function('return ' + inputCalc.innerHTML)();
    }
})



for (let i = 0; i < arrayCalc.length; i++) {
    button = document.createElement('div')
    button.innerHTML = arrayCalc[i]
    button.className = 'button is-black is-inverted is-outlined has-text-weight-bold'

    //styling the buttons 
    if ((i <= 3) || (i === 7) || (i === 11) || (i === 15)) {
        button.className = 'button operators'
    }

    if (i === 18) {
        button.className = 'button is-primary operators buttonEqual'
    }

    if (i % 4 === 0) {
        line = document.createElement('div')
        line.className = 'line'
    }





    let calculate = arrayCalc[i];
    switch (calculate) {

        case 'AC':
            button.addEventListener('click', function () {
                inputCalc.innerHTML = "";
                displayResults.innerHTML = "";

                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false

                afterResults = false

            });
            break;



        case '.':
            button.addEventListener('click', function () {

                if (!noDoubleDots) {
                    noDoubleDots = true
                    inputCalc.innerHTML += "."
                    displayResults.innerHTML += "."
                }

                afterResults = false


            });
            break;

        case '+':
            button.addEventListener('click', function () {
                inputCalc.innerHTML += " + "
                displayResults.innerHTML += " + "
                if (!noDoubleDots) {
                    noDoubleDots = true

                }
                noDoubleDots = false

                afterResults = false

            });
            break;

        case '/':
            button.addEventListener('click', function () {
                inputCalc.innerHTML += " / "
                displayResults.innerHTML += " / "
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false

                afterResults = false

            });
            break;


        case '*':
            button.addEventListener('click', function () {
                inputCalc.innerHTML += " * "
                displayResults.innerHTML += " * "
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false

                afterResults = false

            });
            break;

        case '-':
            button.addEventListener('click', function () {
                inputCalc.innerHTML += " - "
                displayResults.innerHTML += " - "
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false

                afterResults = false

            });

            break;

        case '=':
            button.addEventListener('click', function () {
                displayResults.innerHTML = Function('return ' + inputCalc.innerHTML)();
                inputCalc.innerHTML += " "
                displayResults.innerHTML += " "
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                afterResults = true
            });
            break;

        default:
            button.addEventListener('click', function () {

                if (afterResults === true) {
                    inputCalc.innerHTML = ""
                    displayResults.innerHTML = ""
                }
                afterResults = false;
                if (afterResults === false) {
                    inputCalc.innerHTML += arrayCalc[i];
                    displayResults.innerHTML += arrayCalc[i];
                }

            });

    };




    contentCalc.appendChild(line);
    line.appendChild(button);

}