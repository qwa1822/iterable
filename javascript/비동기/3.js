// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback,seconds){

    if(!callback){
        throw new Error('callbak이 있어야함.')
    }
    if(!seconds||seconds<0){
        throw new Error('seconds 0보다 커야 함')
    }
    setTimeout(callback,seconds*1000);
 
}

runInDelay(()=>{
    console.log('타이머완료');
},1)