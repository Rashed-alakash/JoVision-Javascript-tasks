async function handleSubmitClick() {
    const name = document.getElementById("nameInput").value;
    const response = await fetch(`https://api.agify.io?name=${encodeURIComponent(name)}`);
    const { name: returnedName, age } = await response.json();

    alert(`Your name is: ${returnedName}\nYour age is: ${age}`);
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", handleSubmitClick);