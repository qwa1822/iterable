const map=new Map([
    ['key1','โค'],
    ['key2','๐คฆโโ๏ธ']
]);


// ์ฌ์ด์ฆํ์ธ
console.log(map.size);

// ์กด์ฌํ๋์ง ํ์ธ
console.log(map.has('key1'));

// ์ํ
map.forEach((value,key)=>console.log(key,value))
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// ์ฐพ๊ธฐ
console.log(map.get('key1'));

// ์ถ๊ฐ
map.set('key3','๐');

// ์ญ์  
map.delete('key2');
console.log(map);

// ์ค๋ธ์ ํธ์์ ํฐ ์ฐจ์ด์ 
const key={
    nae:'milk',price:10
};
const milk={name:'milk',price:10,
dsecrition:"author"};

