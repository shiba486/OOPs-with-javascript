function BankAccount(customarName,balance=0){
    this.customarName = customarName
    this.accountNumber = Date.now();
    this.balance = balance

    this.deposite = function(amount){
        this.balance = this.balance + amount
    }
    this.withdraw = function(amount){
        this.balance = this.balance - amount
    }

}

// const user1 = new BankAccount("shiba",2000);
// user1.deposite(500)
// user1.withdraw(300)
// console.log(user1)

// createAccount
const accountFrom = document.querySelector("#accountFrom");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const accounts = []
accountFrom.addEventListener("submit",(e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value,+balance.value);
    accounts.push(account)
    balance.value = "";customerName.value = ""
    console.log(accounts)
});
// deposite amount
const depositeForm = document.querySelector("#depositeForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.deposite(+amount.value);
   
    console.log(accounts);
});
// withdraw amount
const withdrawForm = document.querySelector("#withdrawForm");
const withdrawAccount = document.querySelector("#withdrawAccount");
const withdrawAmount = document.querySelector("#withdrawAmount");

withdrawForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    const account = accounts.find((account)=>account.accountNumber === +accountNumber.value)
    account.withdraw(+amount.value)
    withdrawAccount.value = "";withdrawAmount.value = ""
    console.log(accounts)
})
