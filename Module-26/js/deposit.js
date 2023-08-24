// step-1: Get the deposit button and add evenListener
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2: Get the deposit amount from the input field
    const depositField = document.getElementById("deposit-field");
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString)
    if (isNaN(depositAmount)) {
        alert('Please, Provide amount of TAKA');
        depositField.value = '';
        return;
    }

    // step-3: Get the current deposit amount 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);


    // step-4: Get total amount of deposit 
    depositTotalElement.innerText = depositTotal + depositAmount;

    // step-5: Get balance and Get net balance
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    console.log(totalBalanceString);
    const totalBalance = parseFloat(totalBalanceString);

    totalBalanceElement.innerText = depositAmount + totalBalance;


    // Step - 7: Clear Deposit field
    depositField.value = '';

})