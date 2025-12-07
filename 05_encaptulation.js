class BankAccount{
    customerName;
    #balance=0;
    accountNumber;
    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }
    // old way of setteer
    // setBalance(amount){
    //     if(isNaN(amount)) return "Enter Valid input"
    //      this.#balance = amount
       
    // }

    // new 
     set balance(amount){
        if(isNaN(amount)) return "Enter Valid input"
         this.#balance = amount
        //  console.log(this.#balance)
       
    }
    // old way of getter
    // getBalance(){
    //     return this.#balance
    // }
    // old way of getter
    get balance(){
        return this.#balance
    }
    deposit(amount){
        this.#balance = this.#balance + amount
    }
    withdraw(amount){
        this.#balance = this.#balance - amount
    }
}
const user1 = new BankAccount('shiba',500);
// user1.getBalance();
console.log(user1.balance=3000)