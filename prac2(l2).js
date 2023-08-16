// let no = 123
// let ld =0
// let rev = 0
// while(no>0)
// {
//     console.log(ld = no%10)
//     console.log(rev = rev*10 +ld)
//     console.log(no = no/10)
// }
// console.log(rev)

// let num = 456
// let sum =0
// while (num>0)
// {
//     let digit = num%10
//     sum =sum +digit
//     num = Math.floor(num/10) 
// }
// console.log(sum)

// for (let i =1;i<=100;i++)
// {
//     if(i%6==0 && i%7 == 0)
//     {
//         if(i%2==0)
//         {
//             console.log("num is even number : ",i)
//         }
//         else
//         {
//             console.log("num is odd number : ",i)
//         }
//     }
// }

// let choice =4
// var p = 10
// var q = 5
// switch(choice)
// {
//     case 1 : var add = (a,b)=>a+b
//              console.log(add(p,q))
//              break
//     case 2 : var sub = (a,b) =>
//              {
//                 return a-b
//              }
//              console.log(sub(p,q))
//              break
//     case 3 : var mul = (a,b)=>a*b
//              console.log(mul(p,q))
//              break
//     case 4 : var div = (a,b)=>
//              {
//                 return a/b
//              }
//              console.log(div(p,q))
//              break
//     default: console.log("Invalid Choice!!")
// }

function outer(a,b){
    console.log("Outer function",a,b)
    return function inner(x)
    {
        console.log("Inner Function",x)
    }
}
console.log("Syntax-1")
outer(10,20)
console.log("Syntax-2")
outer(30,40)(50)


