/**
 * Created by moksha on 12/02/17.
 */

class Car {

    private _make: String;
    private _model: String;

    get make(): String {
        return this._make;
    }

    set make(value: String) {
        this._make = value;
    }

    get model(): String {
        return this._model;
    }

    set model(value: String) {
        this._model = value;
    }

    constructor(make: String, model: String) {
        this._make = make;
        this._model = model;
    }

    toString() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }

}