var data = ["pathan","aashiq","meet"]

data.forEach(function(x)
{
    console.log(x)
})

// data.forEach((x,i)=>{
//     console.log("data : ",x,"||","index : ",i)
// })

// var newData = data.map((x)=>{
//     return x.toUpperCase()
// })

// console.log(newData)

data.splice(1,1,"AASHIQ")

data.push("hagt")
data.pop()
data.unshift("123")
data.shift()

data.sort()
console.log(data)

var numbers = [1239,9,86,432]
numbers.sort()
console.log(numbers)
numbers.sort((a,b)=>
{
    return a-b;
})
console.log(numbers)

var data2= ["raj","rahul",1,2,3,4,5,,6]
console.log(data2)
data2 = data2.filter((a)=>
{
    return typeof(a)=="number";
})

console.log(data2)
