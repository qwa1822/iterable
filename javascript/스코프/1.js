// 스코프
/**
 * 이름충돌방지
 * 블록안의 변수는 블럭 안에서만 유효
 * 스코프-식별자가 유효한 범위
 
// 
 */

// 변수는 최대한 필요한곳에서만 
// 식별자가 유효한 범위내에서만
// 코드 블럭: {}, if() , for() ,{}, funcntion() {}
// 블럭 외부에서 블럭 내부의 참조불가

{
    const a='a';
    console.log(a);
}

// 접근불가
console.log(a);
const b='b';

function print(){
    const message="message";
    console.log(message);
}

console.log(message);

// g함수 외부에서는 함수의 매개변수를 참조x

