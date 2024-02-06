/********let x = [1, 3454, 655, 24, 7, 8] find the largest number in x without using sort method*******/

let x =[1, 3454, 655, 24, 7, 8]
let largest =0

/** using for loop **/
for(i=0;i<x.length;i++)
{
	if(x[i]>largest)
    {
     largest=x[i]
	}
}
console.log(largest)