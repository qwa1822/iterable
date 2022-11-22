const map=new Map([
    ['key1','❤'],
    ['key2','🤦‍♀️']
]);


// 사이즈확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));

// 순회
map.forEach((value,key)=>console.log(key,value))
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));

// 추가
map.set('key3','😁');

// 삭제 
map.delete('key2');
console.log(map);
