class Bank {

    static _nextAccNumber = 1;

    constructor() {
        this._accounts = [];
    }
    get accounts (){
        return this._accounts;
    }

    addAccount(){
        this.accounts.push(new Account(Bank.nextNumber()))
    }

    addCheckingAccount(){
        this.accounts.push(new Account(Bank.nextNumber()))
    }

    addSavingAccount(){
        this.accounts.push(new Account(Bank.nextNumber()))
    }

    closeAccount(accNumber){
        this._accounts = this._accounts.filter((account) => account.getNumber() !== accNumber);
    }

    accountReport(){
        let report = "";
        for (let account of this.accounts){
            report += account.getNumber() + "\n"
        }
        return report;
    }

    static nextNumber(){
        return Bank._nextAccNumber++;
    }
    endOfMonth(){
        for (let account of this._accounts){
            account.endOfMonth();
        }

    }
}