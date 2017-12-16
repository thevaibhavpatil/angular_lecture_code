var bal = function (num1, num2) {
    return num1 + num2;
};
// f(x) = a + b
bal = function (num1, num2) { return num1 + num2; }; // inline function
// functional programming
/**
 *  1) functions can return functions
 *  2) functions can become parameter to other functions
 *  3) functions can be assigned to variables
 */
bal(12, 56);
function myData(callBack) {
    callBack();
}
myData(function () {
    console.log("called");
});
myData(function () { return console.log("lambda called"); });
var fn3 = function () {
    return function () {
        return "This is nice";
    };
};
console.log("What it will return ??? " + fn3()());
