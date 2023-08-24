


document.getElementById('btn-deposit').addEventListener('click', function () {
    // Get New Deposit amount ------------------------------
    const newDepositElement = document.getElementById('deposit-amount');
    const newDepositAmountString = newDepositElement.value;
    console.log(newDepositAmountString);
    const newDepositAmount = parseFloat(newDepositAmountString);

    newDepositElement.value = '';
    // Get previous deposit amount----------------------
    const previousDepositElement = document.getElementById('deposit-total');
    const previousDepositAmountString = previousDepositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);



    // Get previous total amount-------------------------------------
    const previousTotalElement = document.getElementById('balance-total');
    const previousTotalAmountString = previousTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    const totalBalanceAmount = previousTotalAmount + newDepositAmount;

    if (isNaN(newDepositAmount)) {
        alert('Please, Provide amount in TAKA');
        return;
    }
    const totalDepositAmount = newDepositAmount + previousDepositAmount;
    previousDepositElement.innerText = totalDepositAmount;
    previousTotalElement.innerText = totalBalanceAmount;
})