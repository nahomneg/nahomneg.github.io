"use strict";
class SavingsAccount extends Account{

    constructor(interest, accNumber) {
        super(accNumber);
        this.interest = interest;
    }

    get interest(){
        return this._interest;
    }

    set interest(interest){
        this._interest = interest;
    }

    addInterest(){
        super.deposit(super.getBalance() + this.interest)
    }

    toString() {
        return "Saving Account: " + super.toString();
    }
    endOfMonth() {
        return "Interest added SavingsAccount "+ this.getNumber() +": balance: "+ this.getBalance() +" interest: " + this.interest;
    }

}