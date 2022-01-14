function calcPercent () {
    let billValue = document.getElementById('bill').value;
    let billPersons = document.getElementById('people').value;
    let calcTip = billValue * 0.05;
    let amountPersons = calcTip / billPersons;
    console.log(amountPersons)
}
