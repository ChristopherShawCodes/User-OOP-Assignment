
class User {
    constructor(username,emailAddress){
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
        return this
    }
    makeDeposit(amount){
        this.accountBalance += amount
        return this
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount
        return this

    }
    displayBalance() {
        console.log('User:', this.name , 'Balance:', this.accountBalance)
        return this

    }
    transferMoney(amount,username){
        this.accountBalance -= amount
        username.accountBalance += amount
        return this
    }
}

class BankAccount {
    constructor(intRate = 0.08, balance = 0) {
    	this.intRate = intRate
        this.balance = balance
        return this
    }
    deposit(amount) {
	    this.balance += amount
        return this
    }
    withdraw(amount) {
	    this.balance -= amount
        if (this.balance < 0){
            console.log("Insufficient Funds: Charging a $5 fee")
            this.balance -= 5
            console.log(balance)
        }
        return this
    }
    displayAccountInfo() {
        console.log('User:', user , 'Balance:', this.accountBalance)
        `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`
        return this
    }
    yieldInterest() {
        this.balance += this.balance * this.intRate
        return this
    }
}



const Christopher = new User("Christopher","framedgamescreations@gmail.com",BankAccount)
const Britt = new User("Britt","nomail@snailmail.org",BankAccount)
const Biscuit = new User("Biscuit","IamAdOg@hotmail.com",BankAccount)



// Christopher.makeDeposit(100)
//            .makeDeposit(500)
//            .makeDeposit(500)
//            .makeWithdrawal(200)
//            .transferMoney(200,Britt)
//            .displayBalance()

// Britt.makeDeposit(700)
//      .makeDeposit(200)
//      .displayBalance()


// Biscuit.makeDeposit(900)
//        .makeWithdrawal(300)
//        .makeWithdrawal(100)
//        .displayBalance()

const bank = new BankAccount()
const bank2 = new BankAccount(0.02,1500)


console.log(Britt)
console.log(Biscuit)
console.log(Christopher)