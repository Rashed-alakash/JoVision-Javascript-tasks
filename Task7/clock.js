


function mytimer() {
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}

setInterval(mytimer, 1000);


