

// 0부터 10이하ㅏ지의 숫자의 2배를 순회하는
// 반복자 만들기

// const multiple={
//     [Symbol.iterator](){
//         const max=10;
//         const num=0;
//         return{
//             next(){
//                 return{
//                     value:num++ * 2,
//                     done:num>max
//                 },
//             };
//         };
//     };
// }

function makeIterable(initialValue,maxValue,callback){
    return{
        [Symbol.iterator](){
            let num=initialValue;
            return{
                next(){
                    return{value:callback(num++),done:num>maxValue}
                }
            }
        }
    }
}

const multiple2=makeIterable(0,20,(num)=>{
    num*2
})
for(const num of multiple2){
    console.log(num);
}


// for(const num of multiple){
//     console.log(num);
// }