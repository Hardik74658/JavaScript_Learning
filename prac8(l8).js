// Practise Of Promise 
function demo(val){
    var promise = new Promise((res,rej)=>{
        if(val==1){
            res("Succes");
        }
        else{
            rej("Failed")
        }
    })
    console.log(promise);
    promise.then((data)=>{
        console.log(data);
        document.getElementById("box").style.backgroundColor="red";
    }).catch((err)=>{
        console.log(err);
        document.getElementById("box").style.backgroundColor="green";
    })
}


// Async Await

function sendData(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("Succes")
        }, 3000);
    })
}

async function getData(){
    var x = await sendData();
    printData(x);
}

function printData(x){
    console.log("printing data....",x);
}

