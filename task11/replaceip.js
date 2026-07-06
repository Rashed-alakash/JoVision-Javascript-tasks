

document.getElementById("reIP").onclick = function () { re() };


function re() {
    fetch('https://api.ipify.orgx/')
        .then(response => response.text())
        .then(data => document.getElementById("reIP").innerHTML = data)
        .catch(error => alert(error.message));


}