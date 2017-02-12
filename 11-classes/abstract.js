var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by moksha on 12/02/17.
 */
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("roaming the earth...");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.makeSound = function () {
        console.log('Bow Bow...');
    };
    return Dog;
}(Animal));
