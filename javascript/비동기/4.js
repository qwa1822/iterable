// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(seconds){
    // callback 함수를 전달해줘야함
    // 성공 resolve
    // 실패 reject
    return new Promise((resolve,reject)=>{
        if(!seconds|| seconds<0){
            // 실패했다면
            reject(new Error("오류 발생"))
        }
        //성공했다면 
        setTimeout(resolve,seconds*1000)
    });
}
runInDelay(2)
.then(()=>{console.log('타이머 완료');
})
.catch(console.error)
.finally(()=>console.log('끝났다!'))

