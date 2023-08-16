function change1(){
    document.getElementById('text').innerHTML = 'Hello World!';
    document.getElementById('text').style.color='red';
}

function change2(){
    document.getElementById('link').href = 'https://www.google.com/';
    document.getElementById('link').innerHTML = 'Google';
}

function change3(){
    document.getElementById('link').style.color = 'red';
}

function change4(){
    document.getElementsByName('red')[0].style.color="red";
    document.getElementsByName('red')[1].style.color="red";

    document.getElementsByClassName('header')[0].style.color="blue";

    document.getElementsByTagName('p')[0].style.color='green';
}
function bg_blue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='blue';
    document.getElementsByTagName('body')[0].style.color='White';

}
function bg_black(){
    document.getElementsByTagName('body')[0].style.backgroundColor='black';
    document.getElementsByTagName('body')[0].style.color='White';

}
function bg_green(){
    document.getElementsByTagName('body')[0].style.backgroundColor='green';
    document.getElementsByTagName('body')[0].style.color='White';

}