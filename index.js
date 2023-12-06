let button = document.getElementById("buttonID"); // reference something in the html side

// Call an event listener for "click" --> https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
button.addEventListener("click", (e) => {
    handleFormSubmission(e);
});


function handleFormSubmission(e) {
    e.preventDefault();

    const input = document.getElementById("inputID");
    const inputValue = input.value

    // Checks if inputValue is not undefined ("None" in python)...
    if ( inputValue ) {
        console.log(inputValue)
    } else {
        console.log("Nope")
    }
}
