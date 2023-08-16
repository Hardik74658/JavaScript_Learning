
//Eroor Handling

// function add(event)
// {
//     event.preventDefault();
//     age = document.getElementById("age").value;
//     try{
//         if (age < 18)
//         {
//             throw new Error("You Are Not Eligible For VOte!!");
//         }
//         else{
//             console.log("You Are Eligible For Vote");
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log("This IS Finally");
//     }
// }


//set timeout set interval fuctions 

// console.log("Start")
// setTimeout(()=>{
//     console.log("Timeout 3s")
//     clearInterval(IntervalID)
// },5000)
// var IntervalID = setInterval(()=>{
//     console.log("Interval 1s")
// },1000)
// console.log("End")


//Promises

// // var promise = new Promise((resolve,reject) => {
// //     setTimeout(()=>{
// //         // resolve("Promise Resolved data Available...")
// //         reject("Promise rejected Error Occured")
// //     },3000)
// // })
// // console.log(promise)
// // promise.then((data)=>{
// //     console.log(data)
// // })
// // promise.catch((err)=>{
// //     console.log(err)
// // })

// function advance(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             // resolve("Advanced Promise Resolved")
//             reject("Advanced Promise rejected Error Occured")
//         },3000)
//     })
// }

// advance().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
