// 논리연산자 Logical Operator
// && 그리고
// ||
// 단축평가:short-circuit evaluation

const obj1={name:'🍔'};
const obj2={name:'🧇',owner:"sumin"};

if(obj1 && obj2){
    console.log('둘다 true!');
}


let result=obj1 && obj2;
console.log(result);


result=obj1 || obj2;
console.log(result);

// 활용예
// && 조건이 truthy일떄, 무언가를 해야 할 경우
// || 조건이 falshy일때, 무언가를 해야 할 경우

function changeOwner(animal){
    if(!animal.owner){
        throw new Error('앱이 crash됨')
    }
    animal.owner='바뀐주인';
}

function makeNewOwner(animal){
    if(animal.owner){
        throw new Error('주인이 있어')
    }

    animal.owner='새로운주인';
}
//주인이있으면 changeOwner을 한다
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);

console.log(obj1);
console.log(obj2);


// null 또는 undefined인 경우를 확인할 때
let item={price:1};
const price=item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined설정 
// || 값이 falshy한 경우 설정(할당):-,-0,null,undefined
function print(message){
    const text=message || 'Hello';
    console.log(text);
}

print();
print(undefined);