// 이터러에시녀
// 제너레이터
// Generator
// 반복 순회 규격,약속 인터페이스


function* multipleGenerator(){
    for(let i=0; i<10; i++){
        console.log(i);
        yield i**2;
    }
}
const multiple=multipleGenerator();
let next=multiple.next();
console.log(next.value,next.done);
 next=multiple.next();
console.log(next.value,next.done);

multiple.return();
// 끝내는것
next=multiple.next();
console.log(next.value,next.done);

multiple.throw('Error');
next=multiple.next();
console.log(next.value,next.done);
