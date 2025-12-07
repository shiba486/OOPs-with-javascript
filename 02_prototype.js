function BankAccount(customarName,balance=0){
    this.customarName = customarName
    this.accountNumber = Date.now();
    this.balance = balance

    // this.deposite = function(amount){
    //     this.balance = this.balance + amount
    // }
    // this.withdraw = function(amount){
    //     this.balance = this.balance - amount
    // }

}

BankAccount.prototype.deposit = function(amount){
    this.balance = this.balance + amount;
}
BankAccount.prototype.withdraw = function(amount){
    this.balance = this.balance - amount;
}
const user1 = new BankAccount("shiba",2000);
const user2 = new BankAccount("shiba");
user1.deposit(400);
console.log(user1,user2)