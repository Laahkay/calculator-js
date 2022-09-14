let displayResults = document.getElementById('display-results')
let displayNum = document.getElementById('display')

function display(number){
displayNum.innerText += number;
}

function allClear()  {
displayNum.innerHTML = '';
displayResults.innerHTML = '';
}

function del() {
    displayNum.innerText = displayNum.innerText.slice(0,-1)
}

function calculate() {
    displayResults.innerText = eval(displayNum.innerText)
}