const calcPercent = () => {
    let billValue = document.getElementById('bill').value;
    let billPersons = document.getElementById('people').value;
    let result = document.getElementById('result');
    let resultTotal = document.getElementById('result-total');
    
    let calcTip = billValue * 0.05;
    let amountPersons = calcTip / billPersons;
    resultTotal.innerText = billValue / billPersons + amountPersons;
    result.innerText = amountPersons;
}
