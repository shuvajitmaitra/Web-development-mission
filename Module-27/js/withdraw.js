document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmountElement = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmountElement.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    withdrawAmountElement.value = '';
    if (isNaN(withdrawAmount)) {
        alert('Please, Provide amount in TAKA');
        return;
    }


    // Get previous withdraw amount----------------------
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);



    // Get previous total amount-------------------------------------
    const previousTotalElement = document.getElementById('balance-total');
    const previousTotalAmountString = previousTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);


    if (withdrawAmount > previousTotalAmount) {
        alert('Insufficient Balance')
        return;
    }
    const totalWithdraw = withdrawAmount + previousWithdrawAmount;
    previousWithdrawElement.innerText = totalWithdraw;


    const totalBalance = previousTotalAmount - withdrawAmount;
    previousTotalElement.innerText = totalBalance;
})