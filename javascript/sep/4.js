
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']


const set11=new Set(fruits);
console.log(set11);

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

let str3=[];

for(const value of set1){
    if(set2.has(value)){
        str3.push(value);
    }
}

str3=new Set(str3);
console.log(str3);