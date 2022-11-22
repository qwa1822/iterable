// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11(ECMAScript 2020)
// ?.
// *
let item={price:1};
const price=item && item.price;
console.log(price);

let obj={name:'🥩',owner:{name:'sumin'}};



function printName(obj){
    const onwerName=obj?.owner?.nmae;
    console.log(onwerName);
}

printName(obj);