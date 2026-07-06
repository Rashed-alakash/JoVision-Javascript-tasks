
const nameget = document.getElementById("nameid");
const ageget = document.getElementById("ageid");
const subbtn = document.getElementById("btnid");

subbtn.onclick = function () {
    const Ename = nameget.value;
    const Eage = ageget.value;
    const time = new Date().toLocaleDateString();

    const userData = {
        name: Ename,
        age: Eage,
        timestamp: time
    };

    const { name, age, timestamp } = userData;

    alert("Your name is: " + name + "\nYour age is: " + age + "\nTimestamp: " + timestamp);

}


