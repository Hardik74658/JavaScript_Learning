const body = document.getElementById("body");
body.style.height = "100vh";
body.onscroll = () => {
    let colr = Math.random() * 200;
    let colg = Math.random() * 200;
    let colb = Math.random() * 200;
    console.log(colr, colg, colb);
    const newBody = document.createElement("div");
    newBody.style.width = "100vw";
    newBody.style.height = "100vh";
    newBody.style.backgroundColor = `rgb(${colr},${colg},${colb})`;
    body.appendChild(newBody);
}