class Person {
    name
    age

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log('Hola, soy ' + this.name + ' y tengo ' + this.age);
    }

    walk() {
        console.log('Estoy caminando');
    }
}

class Singer extends Person {
    musicType

    constructor(name, age, musicType) {
        super(name, age);
        this.musicType = musicType;
    }

    sing() {
        console.log('estoy cantando ' + this.musicType);
    }
}

let hector = new Person('Héctor', 28);
let paula = new Person('Paula', 11);

hector.sayHi();
hector.walk();
paula.sayHi();

let marcos = new Singer('Marcos', 40, 'Rock');
marcos.sayHi();
marcos.walk();
marcos.sing();

let antonio = new Singer('Antonio', 20, 'Kpop UWU');
antonio.sayHi();
antonio.walk();
antonio.sing();