
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-amount');
    const previousDepositTotal = getElementValueById('deposit-total');
    const previousTotalBalance = getElementValueById('balance-total');

    if (isNaN(newDepositAmount)) {
        alert('Please, Provide amount in TAKA');
        return;
    }
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    setTextElementValueById('deposit-total', newDepositTotal);

    const newTotalBalance = previousTotalBalance + newDepositAmount;
    setTextElementValueById('balance-total', newTotalBalance);

})