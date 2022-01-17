const calcPercent = (param) => {
    //let percentValue = param;
    let billValue = document.getElementById('bill').value;
    let billPersons = document.getElementById('people').value;
    let result = document.getElementById('result');
    let resultTotal = document.getElementById('result-total');
    
    let calcTip = billValue * (param / 100);
    let amountPersons = calcTip / billPersons;
    resultTotal.innerText = billValue / billPersons + amountPersons;
    result.innerText = amountPersons;
};


