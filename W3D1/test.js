
describe("Normal Account",function(){
    let acc=new Account(367828);
    it("Checking if a new account with number 367828 was created",function(){
        assert.equal(acc.getBalance(),0.0);
    });
});
describe("Deposit",function(){
   
    it("Deposite amount must increase the balance",function(){
        let acc= new Account("65432");
        acc.deposit(200);
        assert.equal(acc.getBalance(),200);
    });
    it("Deposite amount, if amount is negative it must return amount should bbe greater than 0",function(){
        let acc=new Account("65432");
        assert.throw(()=>acc.deposit(-200), Error);
    });
});

describe("withdraw",function(){
    it("Withdraw amount must deduct from the balance, if amount is negative throw error",function(){
        let acc=new Account("123456");
        assert.throw(()=>acc.withdraw(-100), Error);
    });
    it("withdraw amount, throw error when trying to withdraw amount greater than balance",function(){
        let acc=new Account("123457");
        assert.throw(()=>acc.withdraw(100),Error);
    });
})

describe("Interest Saving Account",function(){
    it("Adding Interest to savings account",function(){
        let acc=new SavingsAccount(400,50);
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.getBalance(),600);
    });
})

describe("CheckingAccount",function(){
    it("Allow the withdraw upto the  overdraft amount",function(){
        let acc=new CheckingAccount("654321",100);
        acc.withdraw(100);
        assert.equal(acc.getBalance(),-100);
    });
    it("if withdrawal is below overDraft it must throw an error",function(){
        let acc=new CheckingAccount(50,100);
        assert.throw(()=>acc.withdraw(115),Error);
    });
    it("negative withdrawal must throw error",function(){
        let acc=new CheckingAccount("123456",100);
        assert.throw(()=>acc.withdraw(-10),Error);
    });
   
});
describe("Bank",function(){
    it("Banks should have an empty array when created",function(){
        let bank=new Bank();
        assert.deepEqual([],bank.accounts);
    });
    it("Opening and closing accounts in a bank",function(){
        let bank=new Bank();
        bank.addAccount(493);
        assert.equal(1,bank.accounts.length);
        bank.closeAccount(bank.accounts[0].getNumber());
        assert.equal(0,bank.accounts.length);
    });
    it("It must Generate reports for the created accounts",function(){
        let bank=new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();
        assert.equal("2\n3\n4\n5\n",bank.accountReport());
    });
});

