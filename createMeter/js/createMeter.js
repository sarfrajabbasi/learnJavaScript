const createMeter = (length,off,on)=>(val)=> Array.from({length}).reduce((result,_,i)=> `${result}${[off,on][Number(val>= (i+0.5)/length)]}`,"");

const meter = createMeter(10,"☆","★");
console.log(meter(0.5));

const otherMeter = createMeter(10,"🤍","💚");
console.log(otherMeter(0.5));