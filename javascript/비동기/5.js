// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('foo')
//     },300)
// });

// myPromise
// .then(handleResolvedA, handleRejectA)
// .then(handleResolvedB, handleRejectB)
// .then(handleResolvedC, handleRejectC);


function fetchEgg(chicken){
    return Promise.resolve(`${chicken}=>✔`)
}
  //
.then((egg)=>console.log(egg))


function fryEgg(egg){
    return Promise.resolve(`${egg}=>🤦‍♀️`);
}


function getChiken(){
    return Promise.reject(new Error('error'));
    // return Promise.resolve(`🥩=>🍔`)
}

getChiken()
.then((chiken)=>{
    return fetchEgg(chiken)
})
.then((egg)=>fryEgg(egg))
.catch((error)=>console.log(error));