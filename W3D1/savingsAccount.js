class SavingsAccount extends Account{
    _interest = 0;
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
    toString() {
        return "overridden " + super.toString();
    }

}