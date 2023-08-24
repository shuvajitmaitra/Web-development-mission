function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


function getElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textValue = parseFloat(textElementValueString);
    return textValue;
}


function setTextElementValueById(elementId, NewValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = NewValue;
}