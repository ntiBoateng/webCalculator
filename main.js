const Calculator = require("./calculator")

let arguments = process.argv
let findNum = new Calculator(parseInt(arguments[3]),parseInt(arguments[4]))


if (arguments[2] === "add"){
    console.log(findNum.add())
}else if (arguments[2] === "product"){
    console.log(findNum.product())
}else{
    console.log("provide the specified argument")
}

