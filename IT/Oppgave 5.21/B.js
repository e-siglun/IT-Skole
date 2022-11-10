var ExpressionArray = [
    20 < 20, //False
    150 >= 50, //True
    15 === "15", //False
    23 === Math.floor(23.9), //True
    Math.sqrt(1010) < 30, //False
    Math.max(-10, 35, 5, 27.3) < 30, //False
    Math.abs(Math.min(-10, 37, -35, 7)) > Math.max(10, -37, 35, -7) //False
]

for (let Index = 0; Index < ExpressionArray.length; Index++) {
    console.log(ExpressionArray[Index])
}