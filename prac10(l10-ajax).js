function getDataByAjax() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?delay=3", true);
    xhr.send();
    // console.log("Started...", xhr.UNSENT);
    // console.log("Server Connection Established...", xhr.OPENED);
    // console.log("Request Received...", xhr.HEADERS_RECEIVED);
    // console.log("Processing Request...", xhr.LOADING);
    // console.log("Responce Generated...", xhr.DONE);
    if (xhr.LOADING == 3) {
        document.getElementById("loading").innerHTML = "Loading....";
    }

    xhr.onprogress = function () {
        console.log("Processing Request", xhr.readyState)
    }
    xhr.onloadstart = function () {
        console.log("Request Received")
    }
    xhr.onload = function () {
        console.log("Processing Request....", xhr.readyState)
        console.log("Responce Text : ", this.responseText);
        console.log("Responce URL : ", this.responseURL);
        console.log("Responce Type : ", this.responseType);
        console.log("Responce : ", this.response)
    }
    xhr.onloadend = function () {
        console.log("Responce Generated....", xhr.readyState);
        console.log("Responce \n ", JSON.parse(this.response))
        document.getElementById("loading").innerHTML = "";
    }
    xhr.ontimeout = function () {
        console.log("Timeout..", this.readyState)
    }
    xhr.onerror = function () {
        console.log("Error..", this.readyState)
    }
}
getDataByAjax();