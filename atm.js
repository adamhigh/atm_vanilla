// your code goes here!
var checkingBalance = 0;
var savingsBalance  = 0;
var checkingDepositButton = document.querySelector("#checkingDepositButton");
var savingsDepositButton  = document.querySelector("#savingsDepositButton");

//event listener for deposit
checkingDepositButton.addEventListener("click", depositIntoChecking);
savingsDepositButton.addEventListener("click", depositIntoSavings);

function depositIntoChecking(){
  var amount = document.querySelector("#checkingAmount").value;
  checkingBalance = checkingBalance + parseInt(amount);

  var balanceDiv = document.querySelector("#checkingBalanceDiv");
  balanceDiv.textContent = "$" + checkingBalance;
}

function depositIntoSavings(){
  var amount = document.querySelector("#savingsAmount").value;
  savingsBalance = savingsBalance + parseInt(amount);

  var balanceDiv = document.querySelector("#savingsBalanceDiv");
  balanceDiv.textContent = "$" + savingsBalance;
}
