// [키,값]
const map=new Map([
    ['key1','🤦‍♂️'],
    ['key2','🤷‍♀️'],
]);
console.log(map);

// 사이즈 확인


// 존재하는지확인

console.log(map.has('key1'));
console.log(map.has('key3'));


map.forEach((value,key)=>console.log(key,value))
console.log(map.keys());
console.log(map.values());
console.log(map.get('key1'));
console.log(map.get('key2'));