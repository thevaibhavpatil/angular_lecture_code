let bal = function (num1: number, num2: number) {
    return num1 + num2
}

// f(x) = a + b

bal = (num1: number, num2: number) => num1 + num2 // inline function

// functional programming
/**
 *  1) functions can return functions
 *  2) functions can become parameter to other functions
 *  3) functions can be assigned to variables
 */

bal(12, 56)

function myData(callBack: any) {
    callBack()
}

myData(function () {
    console.log(`called`)
})

myData(() => console.log(`lambda called`))

let fn3 = function () {
    return function () {
        return `This is nice`
    }
}

console.log(`What it will return ??? ${fn3()()}`)


