employees =[
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:1,
        salary:10000,
        gender:"Male"
    },
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:1,
        salary:10000,
        gender:"Male"
    },
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:1,
        salary:10000,
        gender:"Male"
    }
]

// 1)find a employee who is married and having child
console.log('1')
console.log(employees.filter((x)=>{
    return x.isMarrie == true && x.child != 0;
}))

// 2)find a employee who is married and having child and salary is greater than 10000
console.log('2')
console.log(employees.filter((x)=>{
    return x.isMarrie == true && x.child != 0 && x.salary > 10000;
}))

// 3)find a female employee who is not married
console.log('3')
console.log(employees.filter((x)=>{
    return x.gender=='Female' && x.isMarrie ==false;
}))

// 4)find a male employee who is married but not having child
console.log('4')
console.log(employees.filter((x)=>{
    return x.gender == 'Male' && x.child == 0;
}))