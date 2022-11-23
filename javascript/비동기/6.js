function getBanana(){
    return new Promise((resolve) => {
        ((resolve)=>{
            setTimeout(()=>{
                resolve('🥩');
            },1000)
        })  
    })
}

function getApple(){
    return newPromise((resolve)=>{
        setTimeout(()=>{
            resolve('🍔');
        },3000);
    })
}

// function getOrange(){
//     return Promise.reject(new Error('no name'));
// }

// // 바나나과 사과를 같이 가지고 오기
// getBanana().then((banana)=>getApple().then((apple)=>
//     [banana,apple])
// ).then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행


Promise.all([getBanana(),getApple()])
.then((fruits)=>console.log('all',fruits))

// Promise.race주어진 Promise중에 제일 빨리 수행
Promise.race([getBanana(),getApple()])
.then((fruit)=>console.log('race',(fruit)));