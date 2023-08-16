const size = {
    Small : 100,
    Medium : 200,
    Large : 300
};

const crust = {
    Thin : 100,
    Thick : 200,
    Stuffed : 300
};

const sauses = {
    Tomato : 0,
    BBQ : 100,
    Spicy : 200
};
var orderData = {};
var orderPrices ={};
function showCart(){
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const sauses = document.getElementById('sauses').value;
    const quantity = document.getElementById('quantity').value;
    const km = document.getElementById('km').value;
    orderData = {
        size ,
        crust , 
        sauses , 
        quantity ,
        km 
    }
    document.querySelector(".cart").innerText = `Customization          
                                             \n  Size      : ${size}    
                                             \n  Crust     : ${crust}   
                                             \n  Sauses    : ${sauses}  
                                             \n  Quantity  : ${quantity}  
                                             \n  Kilometer : ${km} `;     
}
var total = 0;
var delivery = 0;
function generateBill(){
    if (orderData.size == "Small") {
        total = total + size.Small;
    } else if (orderData.size == "Medium") {
        total = total + size.Medium;
    } else if (orderData.size == "Large") {
        total = total + size.Large;
    }
    if (orderData.crust == "Thin") {
        total = total + crust.Thin;
    } else if (orderData.crust == "Thick") {
        total = total + crust.Thick;
    } else if (orderData.crust == "Stuffed") {
        total = total + crust.Stuffed;
    }
    if (orderData.sauses == "Tomato") {
        total = total + sauses.Tomato;
    } else if (orderData.sauses == "BBQ") {
        total = total + sauses.BBQ;
    } else if (orderData.sauses == "Spicy") {
        total = total + sauses.Spicy;
    }
    if (orderData.km < 5) {
        total = total + 0;
        deleviry = 0;
    } else if (orderData.km > 5 && orderData.km < 10) {
        total = total + 100;
        delivery = 100
    }
    total = total * orderData.quantity;
    var flag = confirm(
        "Are you sure you want to place this order?"
    );
    if(flag==true){
        document.querySelector(".cart").innerText=`Size      : ${orderData.size} 
                                               \n  Crust     : ${orderData.crust}
                                               \n  Sauses    : ${orderData.sauses}
                                               \n  Quantity  : ${orderData.quantity}
                                               \n  Kilometer : ${orderData.km}
                                               \n  Delivery  : ${delivery}
                                               \n  Total     : ${total}`;
    }
    else{
        alert("Your order has been cancelled");
    }
    
}