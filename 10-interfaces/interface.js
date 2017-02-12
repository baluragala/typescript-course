"use strict";
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var jack = {
    name: 'Jack',
    age: 18,
    grade: 'A'
};
function createSquare(config) {
    return { color: "red", area: 100 };
}
var mySquare = createSquare({ color: "red", width: 100 });
var mySquare1 = createSquare({ colour: 'red', width: 100, opacity: 0.5 });
var mySquare2 = createSquare({ colour: 'red', width: 100, opacity: 0.5 });
var squareOptions = { colour: "red", width: 100 };
var mySquare4 = createSquare(squareOptions);
