//input value
function getInputValue(inputId) {
  const depositAmountInput = document.getElementById(inputId);
  const depositAmountInputText = depositAmountInput.value;
  const depositAmountInt = parseFloat(depositAmountInputText);
  //clear input field
  depositAmountInput.value = "";
  return depositAmountInt;
}
//update withdraw and deposit total field
function updateTotalField(totalField, amount) {
  debugger;
  const totalElement = document.getElementById(totalField);
  const totalText = totalElement.innerText;
  const totalInt = parseFloat(totalText);

  totalElement.innerText = totalInt + amount;
}
//get curent balance
function getCurrentBalance() {
  const totalAmount = document.getElementById("total-amount");
  const totalAmountText = totalAmount.innerText;
  const totalAmountInt = parseFloat(totalAmountText);
  return totalAmountInt;
}
//update balance function
function updateBalance(amount, isAdd) {
  const totalAmount = document.getElementById("total-amount");
  const totalAmountInt = getCurrentBalance();
  if (isAdd == true) {
    totalAmount.innerText = totalAmountInt + amount;
  } else {
    totalAmount.innerText = totalAmountInt - amount;
  }
}

//handle deposit btn
document
  .getElementById("handle-deposit-btn")
  .addEventListener("click", function () {
    //get input function
    const TotalDepositInputAmount = getInputValue("deposit-amount-input");
    if (TotalDepositInputAmount > 0) {
      updateTotalField("depost-total-amount", TotalDepositInputAmount);
      updateBalance(TotalDepositInputAmount, true);
    }
  });

//handle withdraw bank
document
  .getElementById("handle-withdraw-amount")
  .addEventListener("click", function () {
    //get input function
    const TotalWithdrawInputAmount = getInputValue("withdraw-amount-input");
    const totalAmountInt = getCurrentBalance();
    if (
      TotalWithdrawInputAmount > 0 &&
      TotalWithdrawInputAmount < totalAmountInt
    ) {
      updateTotalField("withdraw-total-amount", TotalWithdrawInputAmount);
      updateBalance(TotalWithdrawInputAmount, false);
    }
    if (TotalWithdrawInputAmount > totalAmountInt) {
      console.log("please input a valid number");
    }
  });
