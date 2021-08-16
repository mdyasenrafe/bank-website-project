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
  const totalElement = document.getElementById(totalField);
  const totalText = totalElement.innerText;
  const totalInt = parseFloat(totalText);

  totalElement.innerText = totalInt + amount;
}
//update balance function
function updateBalance(amount, isAdd) {
  const totalAmount = document.getElementById("total-amount");
  const totalAmountText = totalAmount.innerText;
  const totalAmountInt = parseFloat(totalAmountText);

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
    const TotalDepositAmount = getInputValue("deposit-amount-input");
    //update total field function call
    updateTotalField("depost-total-amount", TotalDepositAmount);
    //total amount calculation
    updateBalance(TotalDepositAmount, true);
  });

//handle withdraw bank
document
  .getElementById("handle-withdraw-amount")
  .addEventListener("click", function () {
    //get input function
    const TotalWithdrawInputAmount = getInputValue("withdraw-amount-input");
    //updateTotalField function call
    updateTotalField("withdraw-total-amount", TotalWithdrawInputAmount);
    //update total amount function call
    updateBalance(TotalWithdrawInputAmount, false);
  });
