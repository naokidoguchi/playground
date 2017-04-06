// 動的型付け JavaScript
// var x = 10;
// x = "hello";
// 静的型付け TypeScript
// var x: number = 10;
// any
var any;
any = 10;
any = "hello";
// 配列
var results;
results = [10, 5, 3];
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
