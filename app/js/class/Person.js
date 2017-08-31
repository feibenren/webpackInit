import { Animal } from './Animal.js';
class Person extends Animal {
    constructor(name, type = 'human', sex = 'weizhi') {
        super(type);
        this.name = name;
        this.sex = sex;
    }
    say() {
        console.log(this.name + ' is sayying    ');
    }
}
export { Person }