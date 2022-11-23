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

function fryEgg(egg){
    return Promise.resolve(`${egg}=>🤦‍♀️`);
}


function getChiken(){
    // return Promise.reject(new Error('error'));
    return Promise.resolve(`🥩=>🍔`)
}


async function fetchFlow(){
    const egg=await fryEgg();
    const chiken=await getChiken();
    const FetchEgg=await fetchEgg();
    return [egg,chiken,fetchEgg];
}

fetchFlow().then((value)=>console.log(value));