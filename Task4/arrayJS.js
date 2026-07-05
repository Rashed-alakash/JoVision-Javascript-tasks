function makearray() {
    let array = [];
    for (let i = 0; i <= 100; i++) {
        array[i] = i;
    }
    return array;

}

function sumarray(array) {
    let sum = 0;
    for (i = 0; i <= 100; i++) {
        sum += array[i];
    }
    return sum;
}

function prt() {

    const arr = makearray();
    const sum = sumarray(arr);
    console.log(arr);
    console.log(sum);

}



const arrayHTML = document.getElementById("arrayHTML");

arrayHTML.addEventListener("click", prt);