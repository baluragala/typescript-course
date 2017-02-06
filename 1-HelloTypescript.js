var HelloTypescript = (function () {
    function HelloTypescript(message) {
        this.message = message;
    }
    return HelloTypescript;
}());
var hello = new HelloTypescript('Hello TypeScript');
console.log(hello.message);
