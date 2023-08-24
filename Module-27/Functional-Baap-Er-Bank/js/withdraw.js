document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const previousTotalBalance = getElementValueById('balance-total');

    if (newWithdrawAmount > previousTotalBalance) {
        alert('Insufficient Balance');
        return;
    }
    if (isNaN(newWithdrawAmount)) {
        alert('Please, Provide amount TAKA');
        return;
    }
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    setTextElementValueById('balance-total', newTotalBalance);
})