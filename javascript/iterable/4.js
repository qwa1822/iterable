// Spread 연산자, 전개구문
// 모든 iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// 
// EcmaScript 2018 

function add(a,b,c){
    return a+b+c;
}

const nums=[1,2,3];
console.log(add(...nums));
// Rest parameter

function sum(first,second,...nums){
    console.log(nums);
}

console.log(sum(1,2,0,1,2,3));;


const ellie={name:'Ellie',age:20};
const updated={
    ...ellie,
    job:'s/w enginner'
}

console.log(updated);