function fun() {
    fetch('https://api.ipify.org/')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}

const res = document.getElementById("getip");

res.addEventListener("click", fun);


