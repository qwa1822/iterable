// [ํค,๊ฐ]
const map=new Map([
    ['key1','๐คฆโโ๏ธ'],
    ['key2','๐คทโโ๏ธ'],
]);
console.log(map);

// ์ฌ์ด์ฆ ํ์ธ


// ์กด์ฌํ๋์งํ์ธ

console.log(map.has('key1'));
console.log(map.has('key3'));


map.forEach((value,key)=>console.log(key,value))
console.log(map.keys());
console.log(map.values());
console.log(map.get('key1'));
console.log(map.get('key2'));