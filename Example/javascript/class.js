class Human{
    constructor(){
        this.gender="male";
    }

    printGender(){
        console.log(this.gender);
    }
}


class Person extends Human{
    constructor(){
        super();
        this.name='MAX';
        this.gender='female'
    }

    printMyname=()=>{
        console.log(this.name);
    }
}


const Person1=new Person();
Person1.printMyName();