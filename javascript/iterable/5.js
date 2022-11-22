// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 수비게 만들수 있다.

const fruits=['🎂','🤦‍♂️','🙌']
const[first,second,...others]=fruits;
console.log(first);
console.log(second);
console.log(others);

const point=[1,2];

const[x,y,z=0]=point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
    return ['apple','❤'];
}

const [title,emoji]=createEmoji();
console.log(title);
console.log(emoji);

const ellie={
    name:'sumin',
    age:20,
    job:'s/w enginner'
};

function dispaly({name,age,job}){
    console.log('이름',name);
    console.log('이름',age);
    console.log('이름',job);
}
dispaly(ellie)

const {name,age,job,pet='강아지'}=ellie;
console.log(name);
console.log(age);
console.log(job);
console.log(pet);

const prop={
    name:'Button',
    styles:{
        size:20,
        color:'black',
    },
};


// 컬러로 바로 적용 
function changeColor({styles:{color}}){
    console.log(color);
}
changeColor(prop);


