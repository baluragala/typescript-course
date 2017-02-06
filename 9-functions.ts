/**
 * Created by moksha on 06/02/17.
 */

//types in args and return type
function createAlbum(name: string, artist: string, releaseDate: string): Object {
    return {
        name: name,
        artist: artist,
        releaseDate: releaseDate
    }
}

// Arrow functions
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers1: number[] = numbers.filter(function (n) {
    return n % 2 == 0
});
let evenNumbers2: number[] = numbers.filter(n => n % 2 == 0);
console.log(evenNumbers1);
console.log(evenNumbers2);

//no params
let noParamsFunction = () => {
    console.log('no params')
}

//morethan one param
let twoParamFunction = (a, b) => a + b;
let twoParamFunctionWithMoreThanStatementInBody = (a, b) => {
    let c = a * 2;
    let d = b * 3;
    return c + d;
}

//usage of this

function timer() {
    this.setDelay = 2000;
    setTimeout(() => {
        console.log('Timer fired after ' + this.setDelay + 'ms ');
    }, this.setDelay)
}

timer();

//optional params
function createTrack(name: string, duartion?: number): Object {
    return {}
}

function createTrack2(name: string, duartion: number = 300): Object {
    return {}
}

function makeTeam(manager: string, ...members: string[]): void {
    console.log(manager);
    console.log(members);
}

makeTeam('Joseph', 'Jack', 'Hugh', 'Will', 'Sarah');

//overloading
function getNumbers(all: boolean): number[];
function getNumbers(divisibleBy: number): number[];
function getNumbers(genericProp: any): number[] {
    let result: number[];
    if (typeof genericProp == 'boolean') {
        result = numbers;
    }

    if (typeof genericProp == 'number') {
        result = numbers.filter(n => n % genericProp == 0);
    }
    return result;
}

console.log(getNumbers(true));
console.log(getNumbers(3));