function userCreator(name,score){
    const newUser = Object.create(userFunctionsStore);
    newUser.name = name;
    newUser.score = score;
    return newUser
}

const  userFunctionsStore ={
    sayName:function(){
        console.log(`I'm ${this.name}`);
    },
    increment:function(){
        this.score++
    }
} 

const user1 = userCreator("sarfraj",12);
user1.sayName();
user1.increment()
console.log(user1);

function paidUserCreator(paidName,paidScore,accountBalance){
    const paidUser = userCreator(paidName,paidScore);
    Object.setPrototypeOf(paidUser,paidUserFunctionsStore);
    paidUser.accountBalance =accountBalance
    return paidUser
}

const paidUserFunctionsStore = {
increaseBalance :function(){
    this.accountBalance++
}
}
Object.setPrototypeOf(paidUserFunctionsStore,userFunctionsStore);

const paidUser1 = paidUserCreator("asif",12,10);

paidUser1.increment()
paidUser1.sayName();
paidUser1.increaseBalance()
// console.log(paidUser1);


