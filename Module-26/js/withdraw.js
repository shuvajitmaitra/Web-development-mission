// Step-1: Add event listener in the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step-2: Get withdraw amount in float
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    if (isNaN(withdrawAmount)) {
        alert('Please, Provide amount of TAKA');
        withdrawField.value = '';
        return;
    }

    // step-3: Get the current withdraw amount 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);




    // step-5: Get balance and Get net balance
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString)

    withdrawField.value = '';

    if (withdrawAmount > totalBalance) {
        alert('Baap er Bank e ato taka nai')
        return;
    }
    totalBalanceElement.innerText = totalBalance - withdrawAmount;


    withdrawTotalElement.innerText = withdrawTotal + withdrawAmount;
})