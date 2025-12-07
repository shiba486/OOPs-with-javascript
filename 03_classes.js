
class BankAccount{
    customarName;
    accountNumber = Date.now();
    balance;
    constructor(customarName,balance=0){
        this.customarName = customarName;
        this.accountNumber = Date.now();
        this.balance = balance
    }

    deposit(amount){
        this.balance = this.balance + amount
    }
    withdraw(amount){
        this.balance = this.balance - amount
    }
}

const shibaAccount = new BankAccount("shiba",1000)
const ariyanAccount = new BankAccount("ariyan",500)
shibaAccount.deposit(1000)
ariyanAccount.deposit(5000)
ariyanAccount.withdraw(3000)
console.log(ariyanAccount)
// console.log(shibaAccount)