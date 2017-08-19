class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet(){
        console.log(`hi there my name is ${this.name}.`);
    }
}

export default Person;