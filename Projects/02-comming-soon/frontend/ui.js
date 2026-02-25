const inputField = document.getElementById("user-input")
const outputText = document.getElementById("response-area")


export function getUserText() {
    return inputField.value;
}

export function displayResult(text) {
    outputText.innerText = text;
}