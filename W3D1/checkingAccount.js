class CheckingAccount extends Account{
    constructor(overdraftLimit,accNumber) {
        super(accNumber);
        this._overdraftLimit = overdraftLimit;
    }

    get overdraftLimit(){
        return this._overdraftLimit;
    }

    set overdraftLimit(overdraftLimit){
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this.overdraftLimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }
    toString() {
        return "Checking Account: " + super.toString();
    }

    endOfMonth() {
        if (this._balance < 0){
            return "Warning: Your account balance is below 0"
        } // does nothing
    }
}