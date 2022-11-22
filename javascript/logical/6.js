// Bubbing up,propagating

function a(){
    throw new Error('error');
}


function b(){
    try{
        a();
    }

   catch(error){
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을것 같군!');
    throw error;
}
}


function c(){
    c();
}

try{
    c();
}  catch(error){
    console.log('Catched');
}

console.log('done!');