// your code goes here!
var checkingBalance = 0;
var checkingDepositButton = document.querySelector("#checkingDepositButton");

//event listener for deposit
checkingDepositButton.addEventListener("click", depositIntoChecking);

function depositIntoChecking(){
  var amount = document.querySelector("#checkingAmount").value;
  checkingBalance = checkingBalance + parseInt(amount);
  var balanceDiv = document.querySelector("#checkingBalanceDiv");
  balanceDiv.textContent = "$" + checkingBalance;
}
