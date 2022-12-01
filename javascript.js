// Make calcs long shadow

let calcBody = document.querySelector('.calcshadow');
let calcShadow = '';

for (let i = 0; i < 500; i++) {
    calcShadow += (calcShadow? ',':'')+ i*1 +'px ' + i*1 + 'px 0 #7b9b67';    
}

calcBody.style.boxShadow = calcShadow;