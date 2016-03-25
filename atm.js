var atm = {
  checkingBalance: 0,
  savingsBalance:  0,

  checkingDepositButton: document.querySelector("#checkingDepositButton"),
  savingsDepositButton:  document.querySelector("#savingsDepositButton"),

  checkingInput: document.querySelector("#checkingAmount"),
  savingsInput:  document.querySelector("#savingsAmount"),

  checkingBalanceDiv: document.querySelector("#checkingBalanceDiv"),
  savingsBalanceDiv:  document.querySelector("#savingsBalanceDiv"),

  depositIntoChecking: function() {
    var amount = this.checkingInput.value;
    this.checkingBalance = this.checkingBalance + parseInt(amount);

    this.renderBalance();
  },

  depositIntoSavings: function() {
    var amount = this.savingsInput.value;
    this.savingsBalance = this.savingsBalance + parseInt(amount);

    this.renderBalance();
  },

  renderBalance: function() {
    this.checkingBalanceDiv.textContent = "$" + this.checkingBalance;
    this.savingsBalanceDiv.textContent =  "$" + this.savingsBalance;
  },

  validateInput: function() {

  }
};

//event listener for deposit
atm.checkingDepositButton.addEventListener("click", atm.depositIntoChecking.bind(atm));
atm.savingsDepositButton.addEventListener("click",  atm.depositIntoSavings.bind(atm) );
