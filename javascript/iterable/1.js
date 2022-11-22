const array=[1,2,3];
// 배열 순회가능 
// iterable 하다는건 ! 순회가 가능!
// [symbol.iterator](): Iterator
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 한다는건
// 순회 가능한 객체이다 라는걸 알수있다.
// 순회가 가능하면 무엇을 할수있나. for ..of,spread
for(let el of array){
    console.log(el);
}


const obj={0:1,1:2};
for(let el in obj){
    // 키를 가져옴
    console.log(el);
}

const iterator=array.values();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);