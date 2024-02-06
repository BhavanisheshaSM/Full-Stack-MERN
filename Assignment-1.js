/**** If a Number is Positive, Negative, or Zero ****/
let x = 1
let y = 2
if (x>0)
{
	console.log('This is a positive number')
}
else if(y<0){
	console.log('This is a negative number')
}
else{
	console.log('The value is zero')
}

/**** If a Year is a Leap Year ****/
let leap =2020
div = 2020%4
div == 0 ?console.log('This is leap year'):console.log('This is not a leap year')

/***************or ***************/
let year =2023
year= year%4
if (year==0){
	console.log('This is leap year')
}

else{
	console.log('This year is not a leap year ')
}

/**** The largest of 3 numbers ****/
let a = 75
let b = 30
let c =100
 if (a>b&& a>c)
 {
 	console.log(`${a} is the highest number`)
 }
 else if (b>a&&b>c )
 {
 	console.log(`${b} is the highest number`)
 }

 else if (c>a&&c>b)
 {
 	console.log(`${c} is the highest number`)
 }

/**** Switch statement to show traffic signal light information ****/

 let signal ='yellow'
 switch(signal)
 {
 	case 'red':
 	console.log('STOP! The signal is red')
    break
 	case 'green':
 	console.log('GO! The signal is green')
    break
 	case 'yellow':
 	console.log('SLOW! The signal is yellow')
 	break
 	default:
 	console.log('Follow the signal for safe drive')
 }