class Animal {
    constructor(type = 'animal') {
        this.type = type;
    }
    eat() {
        console.log(this.type + 'is eatting');
    }
}
export { Animal }