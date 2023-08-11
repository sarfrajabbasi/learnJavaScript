class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score =score
    }
    sayName(){
        console.log(`I'm ${this.name}`);
    }
    increment(){
        this.score++
    }
}

const user1 = new UserCreator("sarfraj",10);
user1.sayName();
user1.increment();
// console.log(user1);

class paidUserCreator extends UserCreator{
    constructor(paidName,paidScore,accountBalance){
        super(paidName,paidScore);
        this.accountBalance =accountBalance
    }
    increaseBalance(){
        this.accountBalance++
    }
}

const paidUser1 = new paidUserCreator("sufiyan",10,20);
paidUser1.sayName();
paidUser1.increment();
paidUser1.increaseBalance();
// console.log(paidUser1);