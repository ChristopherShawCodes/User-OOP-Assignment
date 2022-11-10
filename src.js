
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


const Christopher = new User("Christopher","framedgamescreations@gmail.com")
const Britt = new User("Britt","nomail@snailmail.org")
const Biscuit = new User("Biscuit","IamAdOg@hotmail.com")

// Christopher.makeDeposit(100)
// Christopher.makeDeposit(500)
// Christopher.makeDeposit(500)
// Christopher.makeWithdrawal(200)
// Christopher.transferMoney(200,Britt)
// Christopher.displayBalance()


Christopher.makeDeposit(100).makeDeposit(500).makeDeposit(500).makeWithdrawal(200).transferMoney(200,Britt).displayBalance()



Britt.makeDeposit(700)
Britt.makeDeposit(200)
Britt.displayBalance()

Biscuit.makeDeposit(900)
Biscuit.makeWithdrawal(300)
Biscuit.makeWithdrawal(100)
Biscuit.makeWithdrawal(50)
Biscuit.displayBalance()




