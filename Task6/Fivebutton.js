function BA() {

    const arr = makearray();
    const Darray = divisibleby3(arr);
    console.log(Darray);

}

function divisibleby3(array) {
    let Darray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 != 0) {
            Darray[j] = array[i];
            j++;
        }
    }
    return Darray;
}

function BB() {

    let arr = makearray();
    let extarray = ext(arr);
    console.log(extarray);

}

function ext(array) {
    let len = array.length;
    for (let i = len; i <= len + 50 - 1; i++) {
        array.push(i);
    }
    return array;
}


function BC() {

    const arr = makearray();
    const add = add3(arr);
    console.log(add);

}

function add3(array) {
    let len = array.length;
    for (let i = 0; i <= len - 1; i++) {
        array[i] += 3;
    }
    return array;
}

function BD() {

    const arr = makearray();
    const idx = index(arr);
    console.log(idx);

}

function index(array) {
    let x = [];
    let j = 0;

    for (let i = 20; i <= 40; i++) {
        x[j] = array[i];
        j++;
    }

    return x;

}

function BE() {

    const arr = makearray();
    const Sharray = shuffleArray(arr);
    console.log(Sharray);
    const sortD = sort(Sharray);
    console.log(sortD);
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function cmp(a, b) {
    return b - a;
}

function sort(array) {
    return array.sort(cmp);
}


function makearray() {
    let array = [];
    for (let i = 0; i <= 100; i++) {
        array[i] = i;
    }
    return array;

}







const ButtonA = document.getElementById("ButtonA");
const ButtonB = document.getElementById("ButtonB");
const ButtonC = document.getElementById("ButtonC");
const ButtonD = document.getElementById("ButtonD");
const ButtonE = document.getElementById("ButtonE");

ButtonA.addEventListener("click", BA);
ButtonB.addEventListener("click", BB);
ButtonC.addEventListener("click", BC);
ButtonD.addEventListener("click", BD);
ButtonE.addEventListener("click", BE);
