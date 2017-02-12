/**
 * Created by moksha on 10/02/17.
 */
import {Genre} from './enum';


interface Album {
    id: number;
    name: string;
    artist: string;
    releaseDate: string;
    genre: Genre;
    numberOfSongs?: number; // Optional Properties
    print: () => void; // method - no args and returns nothing; function signature
}

//function types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    grade: string;
}

let jack: Student = {
    name: 'Jack',
    age: 18,
    grade: 'A'
};

//Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}


interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    return {color: "red", area: 100};
}

let mySquare = createSquare({color: "red", width: 100});

let mySquare1 = createSquare({colour: 'red', width: 100, opacity: 0.5} as SquareConfig);

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let mySquare2 = createSquare({colour: 'red', width: 100, opacity: 0.5});

let squareOptions = {colour: "red", width: 100};
let mySquare4 = createSquare(squareOptions);