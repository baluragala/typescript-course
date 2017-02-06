/**
 * Created by moksha on 06/02/17.
 */
//infer types when external type is not specified

let greet: string = 'Hello Zeolearn';
//greet = 200;

function spellNumber(a): number {
    return parseInt(a);
}

let numberInWords: string = 'Twenty One';
//numberInWords = spellNumber(10);