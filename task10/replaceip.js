

document.getElementById("reIP").onclick = function () { re() };


function re() {
    fetch('https://api.ipify.org/')
        .then(response => response.text())
        .then(data => document.getElementById("reIP").innerHTML = data)
        .catch(error => console.error('Error:', error));


}