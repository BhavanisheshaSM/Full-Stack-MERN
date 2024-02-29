/**** Second Maximum Number ****/
function SecondMaximum(arr)
{
    let largest = arr[0]
    let secondLargest = null
    for (let i=1; i<arr.length; i++)
    {
      if (arr[i]>largest)
      {
        secondLargest=largest
        largest=arr[i]
      }
      else if (arr[i]<largest && arr[i]>secondLargest)
      {
        secondLargest=arr[i]
      }
    }
    return secondLargest
  }
  let numbers=[6, 4, 8, 3, 11, 10, 9]
  let Result=SecondMaximum(numbers)
  console.log(Result)


/**** Second Mininum Number ****/
function SecondMinimum(arr)
{
    let Smallest = arr[0]
    let SecondSmallest = null
    for (let i=1; i<arr.length; i++)
    {
      if (arr[i]<Smallest)
      {
        SecondSmallest=Smallest
        Smallest=arr[i]
      }
      else if (arr[i]>Smallest && arr[i]<SecondSmallest)
      {
        SecondSmallest=arr[i]
      }
    }
    return SecondSmallest
  }
  let numbers=[6, 4, 8, 3, 11, 10, 9]
  let Result=SecondMinimum(numbers)
  console.log(Result)


/**** Sort an Array ****/
  function Sort(arr)
  {
  let len=arr.length
  for( let i=0; i<len; i++)
  {
    for ( let j=0; j<len-1-i; j++)
    {
      if(arr[j]>arr[j+1])
      {
        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}
let number=[5,2,9,6,8,1]
console.log(Sort(number))


/**** Remove duplicate elements from an array ****/
function Duplicate(arr){
  let duplicates=[]
  for(let i=0; i<arr.length; i++)
  {
    for (let j=i+1; j<arr.length; j++)
    {
      if(arr[i]===arr[j])
      {
        duplicates.push(arr[i])
      }
    }
  }
  return duplicates
}
let numbers=[1,3,2,8,4,3,1,2,5]
let Result=Duplicate(numbers)
console.log(Result)


/**** Remove duplicate elements in a string ****/
function Duplicate(str) {
    let duplicates = []
    for (let i=0; i<str.length; i++)
    {
        for (let j=i+1; j<str.length; j++)
        {
            let current=str[i]
            if (str.indexOf(current, i+1) ===-1)
            {
                continue
            }
            if (current===str[j])
            {
                duplicates.push(current)
                break
            }
        }
    }
    return duplicates
}
let word = "HelloWorld"
let Result = Duplicate(word)
console.log(Result)


/**** Convert camelCase to snake_case ****/
function camelToSnake(str)
{
    return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`)
}
let word = "haiiHelloGoodEvening"
let Result = camelToSnake(word)
console.log(Result)


/**** Convert  snake_case to camelCase ****/
let Str='haii_hello_good_evening'
let res=''
function snakeToCamel(Str){
    for( let i=0; i<Str.length; i++)
    {
        if(Str[i]==='_')
        {
            i++
            res+= Str[i].toUpperCase()
        }
        else{
            res+=Str[i]
        }
    }
    return res
}
console.log(snakeToCamel(Str))


/**** Flatten the nested array ****/
function flat(arr){
    let result=[]
    for(let i=0; i<arr.length; i++)
    {
        if(typeof arr[i]=="number")
        {
            result.push(arr[i])
        }
        else {
            result.push(...flat(arr[i]))
        }
    }
    return result
}
let arr=[1,2,3,[4,5,6,[7,8,9],10,11,12],13,14,15]
console.log(flat(arr))


/**** 2nd largest number in a nested array ****/
function SecondLargest(arr)
{
    let largest=0
    let secondLarge=0
    for (let i=0; i<arr.length; i++)
    {
        for (let j=0; j<arr[i].length; j++)
        {
            if (arr[i][j]>largest)
            {
                secondLarge=largest
                largest=arr[i][j]
            } 
            else if (arr[i][j]>secondLarge && arr[i][j] !== largest)
            {
                secondLarge=arr[i][j]
            }
        }
    }
    return secondLarge
}
let Array = [[1, 2, 3, 4], [10, 5, 6], [7, 8, 9, 11]]
console.log(SecondLargest(Array))

  
/**** Adding zeros after 3 values in array ****/
function Add(arr)
{
    let result = []
    for (let i=0; i<arr.length; i++)
    {
        result.push(arr[i])
        if ((i+1) % 3 === 0 && i !== 0)
        {
            result.push(0)
        }
    }
    return result
}
let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Add(Array))


/**** Reverse a string ****/
function ReverseStr(str)
{
    let reverse = ''
    for (let i=str.length-1; i>=0; i--)
    {
      reverse+=str[i]
    }
    return reverse
  }
  let String = "Karthik S M"
  let Result=ReverseStr(String)
  console.log(Result)


/**** Fibonacci series ****/
function Fibonacci(n) 
{
    if (n<=1)
    {
      return n
    } 
    else {
      return Fibonacci(n-1)+Fibonacci(n-2)
    }
  }
  let Result = Fibonacci(10)
  console.log(Result)


/**** How many times an elements are repeated in an array ****/
function Count(arr)
{
    let dup = { }
    for (let i=0; i<arr.length; i++)
    {
        let element=arr[i]
        dup[element]=(dup[element] ||0)+1
    }
    return dup
}
let array = [1,2,3,3,5,2,1,7,6,8,7,8] 
console.log(Count(array))


/**** How many times an elements are repeated in string ****/
function Count(str)
{
    let dup = { }
    for (let i=0; i<str.length; i++)
    {
        let element=str[i]
        dup[element]=(dup[element] ||0)+1
    }
    return dup
}
let word = 'abcdaabdlfjl' 
console.log(Count(word))


/**** The each words first letter to capital ****/
let words = ["abc","def","ghi"]
let Result=words.map(el=>el.charAt(0).toUpperCase()+el.slice(1))
console.log(Result)


/**** Sum of total mark ****/
let Class=[
    { Subject:'Maths', Mark:60 },
    { Subject:'Science', Mark:70 },
    { Subject:'English', Mark:90 }
]
function Totals()
{
    let Total=0
    for(let i=0; i<Class.length; i++)
    {
      Total+=Class[i].Mark
    }
    return Total
}
console.log(Totals(Class))


/**** Remove the duplicate from 2 arrays ****/
let arr=[1,2,3,4,5]
let arr1=[5,3,7,8,9]
let arr2=[]
function dup(arr){
    for(let i=0; i<arr.length; i++)
    {
        if(arr1.includes(arr[i]))
        {
            arr2.push(arr[i])
        }
    }
    return arr2
}
console.log(dup(arr))