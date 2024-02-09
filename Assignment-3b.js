/***** Implement forEach *****/
function myForEach(arr, callback) {
    for (let i=0; i<arr.length; i++)
    {
      callback(arr[i], i, arr)
    }
  }
  let bikes=["KTM", "Yamaha", "Sujuki","BMW"]
  myForEach(bikes, (bike, index, arr) => {
    console.log(`Index: ${index}, Bike: ${bike}`)
  })


/***** Implement map *****/
function myMap(arr, callback) {
  let Arr=[]
  for (let i=0; i<arr.length; i++)
    {
      Arr.push(callback(arr[i], i, arr))
    }
    return Arr
  }
  let numbers=[1, 2, 3, 4, 5]
  let square=myMap(numbers, (number) => number*number)
  console.log('Squared numbers are:', square)
  
  
 /***** Implement filter *****/
 function myFilter(arr, callback) {
  let Arr=[]
  for (let i=0; i<arr.length; i++)
  {
    if (callback(arr[i], i, arr))
    {
      Arr.push(arr[i])
    }
  }
  return Arr
}
const numbers=[1, 2, 3, 4, 5, 6]
const Numbers=myFilter(numbers, (number) => number%2 === 0)
console.log('Even numbers are:', Numbers)

  
 /***** Implement reduce *****/
function myReduce(arr, callback, value = 0) {
  let accumulator=value
  for (let i=0; i<arr.length; i++)
  {
    accumulator=callback(accumulator, arr[i], i, arr)
  }
  return accumulator;
}
let numbers=[10, 25, 23, 40, 35]
let sum=myReduce(numbers, (accumulator, number) => accumulator+number)
console.log('Sum of numbers are:', sum)


 /***** Function Composition *****/
 function compose(a,b) {
  return function(...args) {
    return a(b(...args))
  }
}
 function addOne(x) {
  return x + 1
}
function addtwo(x) {
  return x * 2
}
let Double=compose(addOne, addtwo)
console.log(Double(15))


 /***** Higher-Order Function Practice *****/
 function sumOf(arr) {
  return arr
    .filter(num=> num % 2 === 0)
    .map(num => num*num)
    .reduce((sum, square) => sum+square, 0)
}
let numbers=[1, 2, 3, 4, 5, 6]
let sum=sumOf(numbers)
console.log(sum)


 /***** Custom Map and Filter *****/
 function customMap(arr, callback) {
  let Arr=[]
  for (let i=0; i< arr.length; i++) {
    Arr.push(callback(arr[i], i, arr))
  }
  return Arr
}
function customFilter(arr, callback) {
  let filterArr=[]
  for (let i=0; i< arr.length; i++) {
    if (callback(arr[i], i, arr))
    {
      filterArr.push(arr[i])
    }
  }
  return filterArr
}
let numbers=[1, 2, 3, 4, 5]
let double=customMap(numbers, (number) => number*2)
console.log(double)
let even=customFilter(numbers, (number) => number%2 === 0)
console.log(even)

  