function makearray() {
    let array = [];
    for (let i = 0; i <= 100; i++) {
        array[i] = i;
    }
    return array;

}

function sumevenarray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += array[i];
        }
    }
    return sum;
}

function prt() {

    const arr = makearray();
    const sumeven = sumevenarray(arr);
    console.log(arr);
    console.log(sumeven);

}



const arrayHTML = document.getElementById("arrayevenHTML");

arrayHTML.addEventListener("click", prt);