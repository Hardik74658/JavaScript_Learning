async function fetchData(event) {
    event.preventDefault();
    alert("Hello")
    let res = await fetch("https://reqres.in/api/users?page=2");
    let finalres = await res.json();
    console.log(finalres)
    let data = finalres.data;
    console.log(data)
    users = data.map((userData) => {
        return userData.first_name
    })
    console.log(users)
}

async function postData(data) {
    alert("Posted ")
    let res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    var finalres = await res.json();
    return finalres;
}

async function submitData(event) {
    event.preventDefault()
    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    const data = {
        name,
        job
    }

    let postedata = await postData(data);
    console.log(postedata)
}