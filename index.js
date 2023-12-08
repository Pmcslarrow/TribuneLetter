let button = document.getElementById("buttonID"); // reference something in the html side

// Call an event listener for "click" --> https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
button.addEventListener("click", (e) => {
    handleFormSubmission(e);
});


function handleFormSubmission(e) {
    e.preventDefault();

    // Gathers csv input value
    const csv = document.getElementById("csvID");
    const csvValue = csv.value
    // Gathers email input value
    const email = document.getElementById("emailID");
    const emailValue = email.value
    // Gathers header input value
    const header = document.getElementById("headerID");
    const headerValue = header.value
    // Gathers body input value
    const body = document.getElementById("bodyID");
    const bodyValue = body.value

    // Checks if csvValue is not undefined ("None" in python)...
    if ( csvValue ) {
        console.log(csvValue)
    } else {
        console.log("The csv file input is empty")
    }
    // Checks if emailValue is not undefined ("None" in python)...
    if ( emailValue ) {
        console.log(emailValue)
    } else {
        console.log("The email input is empty")
    }
    // Checks if headerValue is not undefined ("None" in python)...
    if ( headerValue ) {
        console.log(headerValue)
    } else {
        console.log("The header input is empty")
    }
    // Checks if bodyValue is not undefined ("None" in python)...
    if ( bodyValue ) {
        console.log(bodyValue)
    } else {
        console.log("The body input is empty")
    }
}
