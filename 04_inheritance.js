
class BankAccount{
    customerName;
    balance=0;
    accountNumber;
    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
    deposit(amount){
        this.balance = this.balance + amount
    }
    withdraw(amount){
        this.balance = this.balance - amount
    }
}



class CurrentAccount extends BankAccount{
     transactionLimit = 50000;
    constructor(customerName,balance=0){
        super(customerName,balance)
    }
}
const user1 = new CurrentAccount("shiba",500);
console.log(user1)

// inheritance using constructor function

// function BankAccount(customarName,balance=0){
//     this.customarName = customarName
//     this.accountNumber = Date.now();
//     this.balance = balance

// }

// BankAccount.prototype.deposit = function(amount){
//     this.balance = this.balance + amount;
// }
// BankAccount.prototype.withdraw = function(amount){
//     this.balance = this.balance - amount;
// }

// function CurrentAccount(customarName,balance=0){
//     BankAccount.call(this,customarName,balance)
//     this.transactionLimit = 10000;
// }
// CurrentAccount.prototype=Object.create(BankAccount.prototype)

// const shibaAccount = new BankAccount("shiba",1000)
// const shibaCurrentAccount = new CurrentAccount("shibanondo",500)
// console.log(shibaCurrentAccount)