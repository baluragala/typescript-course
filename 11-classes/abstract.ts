/**
 * Created by moksha on 12/02/17.
 */
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("roaming the earth...");
    }
}

class Dog extends Animal {
    makeSound():void{
        console.log('Bow Bow...');
    }
}