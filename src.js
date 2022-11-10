
class User {
    constructor(username,emailAddress){
        this.name = username
        this.email = emailAddress
        this.account = new BankAccount()
        return this
    }
    makeDeposit(amount){
        this.account.deposit(amount)
        return this
    }
    makeWithdrawal(amount){
        this.account.withdraw(amount)
        return this

    }
    displayInfo() {
        console.log(
            `Name: ${this.name}, Account Balance: $${this.account.balance}, Interest Rate: ${this.account.intRate}`
        )
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
        console.log(
        `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`)
        return this
    }
    yieldInterest() {
        this.balance += this.balance * this.intRate
        return this
    }
}



const Christopher = new User("Christopher","framedgamescreations@gmail.com")
const Britt = new User("Britt","nomail@snailmail.org")
const Biscuit = new User("Biscuit","IamAdOg@hotmail.com")




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



Christopher.makeDeposit(200)
Christopher.displayInfo()
