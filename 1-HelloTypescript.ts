class HelloTypescript {
    constructor(public message: string) {
    }
}
var hello = new HelloTypescript('Hello TypeScript');
console.log(hello.message);
