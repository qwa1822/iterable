const number=1;
const num2=number;


const person={
    name:'max'
}


const secondPerson={
    ...person
}
person.name="menu"
console.log(secondPerson);  