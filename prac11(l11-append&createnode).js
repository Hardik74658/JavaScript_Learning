// const user = [
//     {
//         name: 'John',
//         email: 'john@example.com'
//     },
//     {
//         name: 'Mark',
//         email: 'mark@example.com'
//     },
//     {
//         name: 'Peter',
//         email: 'peter@example.com'
//     }
// ]


// const elediv1 = document.getElementById('div1');
// const newpara = document.createElement('p');
// newpara.innerHTML = 'This Is New PAragraph By JS';
// elediv1.appendChild(newpara);

// const elediv2 = document.getElementById('div2');
// const newTag = document.createElement('h1');
// newTag.innerHTML = "This Is New H1 Tag Created By JS";
// newTag.style.color = "red";
// const end = document.getElementById('end');
// elediv2.insertBefore(newTag, end);


// user.forEach((user) => {
//     const tr = document.createElement('tr');
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td');
//     td1.innerHTML = user.name;
//     td2.innerHTML = user.email;
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     data.appendChild(tr);
// })


const tbody = document.getElementById('data');

const getData = async () => {

    let user1 = [];
    const res = await fetch("https://reqres.in/api/users?page=2");
    const data = await res.json();
    user1 = data.data;

    user1.forEach((user) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerHTML = user.first_name;
        td2.innerHTML = user.email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    })

}

getData()

const gotoEle = document.getElementById('goto');
const newBtn = document.createElement('button');
newBtn.innerHTML = "Click Me";
newBtn.style.color = "red";
newBtn.onclick = () => {
    alert("Clicked");
}
gotoEle.appendChild(newBtn);
const gotogoogle = document.createElement("a");
gotogoogle.innerHTML = "GoTo Google";
gotogoogle.href = "https://www.google.com/";
gotoEle.appendChild(gotogoogle);
