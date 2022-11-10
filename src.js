
class User {
    constructor(username,emailAddress){
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance += amount
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount
    }
    displayBalance() {
        console.log('User:', this.name , 'Balance:', this.accountBalance)
    }
    transferMoney(amount,username){
        this.accountBalance -= amount
        username.accountBalance += amount
    }
}


const Christopher = new User("Christopher","framedgamescreations@gmail.com")
const Britt = new User("Britt","nomail@snailmail.org")
const Biscuit = new User("Biscuit","IamAdOg@hotmail.com")

Christopher.makeDeposit(100)
Christopher.makeDeposit(500)
Christopher.makeDeposit(500)
Christopher.makeWithdrawal(200)
Christopher.transferMoney(200,Britt)
Christopher.displayBalance()

Britt.makeDeposit(700)
Britt.makeDeposit(200)
Britt.displayBalance()

Biscuit.makeDeposit(900)
Biscuit.makeWithdrawal(300)
Biscuit.makeWithdrawal(100)
Biscuit.makeWithdrawal(50)
Biscuit.displayBalance()




