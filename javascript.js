
// Make the calculator body have a long shadow

let calcBody = document.querySelector('.calcshadow');
let calcShadow = '';

for (let i = 0; i < 500; i++) {
    calcShadow += (calcShadow? ',':'')+ i*1 +'px ' + i*1 + 'px 0 #7b9b67';    
}

calcBody.style.boxShadow = calcShadow;

// Calculator functionality 

let result = '';

let display = document.getElementById('display');

let operateArray = '';

let justNumbersArr ='';

let [x, y] = ''

let buttons = Array.from(document.getElementsByClassName('btn-calc'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;

            case 'DEL':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;  

            case '=':
                display.innerText = operate();
                break;

            case '*':
            case '/':
            case '+':
            case '-':    
                if (display.innerText.includes('*', '/', '-', '+') || display.innerText.includes('/') ||display.innerText.includes('-') ||display.innerText.includes('+')) {
                    display.innerText = operate();                    
                };
                display.innerText += e.target.innerText;
                break;

            default:
                display.innerText += e.target.innerText;    
        }
    })
})


function operate() {
    operateArray = Array.from(display.innerText);

    switch(true) {
        case (display.innerText == '0/0'):
            result = "NOT TODAY SATAN";
        break;

        case (display.innerText.includes('+')):
            justNumbersArr = operateArray.join('').split('+');
            [x, y] = justNumbersArr;
            result = (x*1 + y*1);
        break;

        case (display.innerText.includes('-')):
            justNumbersArr = operateArray.join('').split('-');
            [x, y] = justNumbersArr;
            result = (x*1 - y*1);
        break;

        case (display.innerText.includes('*')):
            justNumbersArr = operateArray.join('').split('*');
            [x, y] = justNumbersArr;
            result = (x*1 * y*1);
        break;
        
        case (display.innerText.includes('/')):
            justNumbersArr = operateArray.join('').split('/');
            [x, y] = justNumbersArr;
            result = (x*1 / y*1);
        break;

    }

    return result;
}
