// JSON:javascript Object Notation
// 서버와 클라이언트(브라우저,모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// Stringify(object):JSON
// parse(JSON):object

const ellie={
    name:'ellie',
    age:20,
    eat:()=>{
        console.log('eat');
    }
}
// 작렬화
// 객체를 문자열로 바꿔주는것 Serializing
const json=JSON.stringify(ellie);
console.log(ellie);
console.log(json);

// 역직렬화 Deseriallizing:문자열 데이터를 자바스크립트
//  객체로변환

const obj=JSON.parse(json);
console.log(obj);