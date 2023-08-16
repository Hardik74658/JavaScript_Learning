
const size = {
    "small"  : 100,
    "medium" : 200,
    "large"  : 300,
}
const crust = {
    "thin"    : 100,
    "thick"   : 200,
    "stuffed" : 300, 
}
const sauses = {
    "tomato" : 0,
    "bbq"    : 100,
    "spicy"  : 200,
}

var orderData = {};
const order = (event) => {
    event.preventDefault();
    var size = document.getElementById("size").value
    console.log(size)
    var crust = document.getElementById("crust").value
    console.log(crust)
    var sauses = document.getElementById("sauses").value
    console.log(sauses)
    var qty = document.getElementById("qty").value
    console.log(qty)

    const orderData = {
        size: size,
        crust: crust,
        sauses: sauses,
        qty: qty,
    }
    bill(orderData)
}

var total = 0;
const bill = (orderData) => {

    console.log(orderData);

    if(orderData.size == "small")
    {
        total = total + size.small;
    }
    else if(orderData.size == "medium")
    {
        total = total + size.medium;
    }
    else if(orderData.size == "large")
    {
        total = total + size.large;
    }

    if(orderData.crust == "thick")
    {
        total = total + crust.thick;
    }
    else if(orderData.crust == "thin")
    {
        total = total + crust.thin;
    }
    else if(orderData.crust == "stuffed")
    {
        total = total + crust.stuffed;
    }

    if(orderData.sauses == "tomato")
    {
        total = total + sauses.tomato;
    }
    else if(orderData.sauses == "bbq")
    {
        total = total + sauses.bbq;
    }
    else if(orderData.sauses == "spicy")
    {
        total = total + sauses.spicy;
    }

    total=total*orderData.qty;
    console.log(total);

    var orderString = JSON.stringify(orderData);
    console.log(orderString);
    document.getElementById("box").innerHTML = orderString;
}

const placeOrder =()=>{

    var flag = confirm("Are you sure you want to place this order?");
    if(flag==true){
        alert("Your order has been placed successfully of Amount : "+total);
        document.getElementById("psize").innerHTML = orderData.size;
        document.getElementById("pcrust").innerHTML = orderData.crust;
        document.getElementById("psause").innerHTML = orderData.sauses;
        document.getElementById("pqty").innerHTML = orderData.qty;
        // document.getElementById("pkm").innerHTML = orderData.km;
        document.getElementById("ptotal").innerHTML = total;
    }
    else{
        alert("Your order has been cancelled");
    }
}