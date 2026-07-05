function makearray() {
    let array = [];
    for (let i = 0; i <= 100; i++) {
        array[i] = i;
    }
    return array;

}

function sumarray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
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