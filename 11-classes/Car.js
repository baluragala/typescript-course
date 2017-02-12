/**
 * Created by moksha on 12/02/17.
 */
var Car = (function () {
    function Car(make, model) {
        this._make = make;
        this._model = model;
    }
    Object.defineProperty(Car.prototype, "make", {
        get: function () {
            return this._make;
        },
        set: function (value) {
            this._make = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.toString = function () {
        return "Make: " + this.make + ", Model: " + this.model;
    };
    return Car;
}());
