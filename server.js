console.log("server run")
console.log("second change")
console.log("second change")
console.log("second change")
console.log("second change")
console.log("second change")
console.log("second change")
console.log("second change")
console.log("second change")

const log = (function () {
    return function () {
        return console.log("hello world")
    }()
})()
