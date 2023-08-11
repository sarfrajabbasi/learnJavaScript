function UserCreator(name,score){
    this.name = name;
    this.score = score;
}

UserCreator.prototype.sayName = function(){
    console.log(`I'm ${this.name}`);
};
UserCreator.prototype.increment = function(){
    this.score++
};

const user1 = new UserCreator("sarfraj",10);
// user1.sayName();
user1.increment();
// console.log(user1);

function PaidUserCreator(paidName,paidScore,accountBalance){
    // auto this refer pass in call method()this:{}
    UserCreator.call(this,paidName,paidScore);
    this.accountBalance = accountBalance;
}
// assign new object with object.create(and passing the refer of userCreator);
PaidUserCreator.prototype =Object.create(UserCreator.prototype);
PaidUserCreator.prototype.increaseBalance = function(){
    this.accountBalance++
};

const paidUser1 = new PaidUserCreator("asif",10,10);
paidUser1.sayName()//I am asif
paidUser1.increment();
paidUser1.increaseBalance()
console.log(paidUser1);//{};