/**
 * Created by moksha on 06/02/17.
 */
//types in args and return type
function createAlbum(name, artist, releaseDate) {
    return {
        name: name,
        artist: artist,
        releaseDate: releaseDate
    };
}
// Arrow functions
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers1 = numbers.filter(function (n) {
    return n % 2 == 0;
});
var evenNumbers2 = numbers.filter(function (n) { return n % 2 == 0; });
console.log(evenNumbers1);
console.log(evenNumbers2);
//no params
var noParamsFunction = function () {
    console.log('no params');
};
//morethan one param
var twoParamFunction = function (a, b) { return a + b; };
var twoParamFunctionWithMoreThanStatementInBody = function (a, b) {
    var c = a * 2;
    var d = b * 3;
    return c + d;
};
//usage of this
function timer() {
    var _this = this;
    this.setDelay = 2000;
    setTimeout(function () {
        console.log('Timer fired after ' + _this.setDelay + 'ms ');
    }, this.setDelay);
}
timer();
//optional params
function createTrack(name, duartion) {
    return {};
}
function createTrack2(name, duartion) {
    if (duartion === void 0) { duartion = 300; }
    return {};
}
function makeTeam(manager) {
    var members = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        members[_i - 1] = arguments[_i];
    }
    console.log(manager);
    console.log(members);
}
makeTeam('Joseph', 'Jack', 'Hugh', 'Will', 'Sarah');
function getNumbers(genericProp) {
    var result;
    if (typeof genericProp == 'boolean') {
        result = numbers;
    }
    if (typeof genericProp == 'number') {
        result = numbers.filter(function (n) { return n % genericProp == 0; });
    }
    return result;
}
console.log(getNumbers(true));
console.log(getNumbers(3));
