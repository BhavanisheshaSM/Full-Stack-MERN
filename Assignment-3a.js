/**** Sum of Two Numbers ****/
function sum(a, b) {
    return a + b
}
let result = sum(10,15)
console.log(result)


/**** Check for Even or Odd ****/
function EvenOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(EvenOdd(10))


/**** Reverse a String ****/
function reverse(str) {
    return str.split("").reverse().join("")
}
let original = "Good Morning"
let reversed = reverse(original)
console.log(reversed)


/**** Calculate Square ****/
function square(number) {
    return number * number
}
let num = 8
let result = square(num)
console.log(result)


/**** Concatenate Strings ****/
function concatenate(str1, str2) {
    return str1 + str2
}
let str1="Good Morning "
let str2="Have a nice day"
let result=concatenate(str1,str2)
console.log(result)

/**** Check for Palindrome ****/
function Palindrome(str) {
    let lowerStr = str.toLowerCase()
    let alphanumericStr = lowerStr.replace(/[^a-z0-9]/g, "")
    let reversedStr = alphanumericStr.split("").reverse().join("")
    return alphanumericStr === reversedStr
}
let result = "malayalam";
console.log(Palindrome(result))
 

/**** Calculate Factorial ****/
function Factorial(num){
    let fact=1
    for(let i=1; i<=num; i++)
    {
        fact*=i
        console.log(`Factorial of ${i} is ${fact}`)
    }
}
Factorial(6)


/**** Maximum of Two Numbers ****/
function Largest(num1, num2) {
    return num1 > num2 ? num1:num2
}
let num1 = 30
let num2 = 80
let result = Largest(num1, num2)
console.log(result)


/**** Greet a Person ****/
function greet(name) {
    return "Haii, " + name 
}
let name = "Karthik"
let message = greet(name)
console.log(message)


/**** Calculate Average ****/
function Average(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num)
    return sum/numbers.length
}
let number = [20, 30, 30, 40, 50]
let average = Average(number)
console.log(average)


