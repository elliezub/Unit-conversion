let buttonEl = document.getElementById("convert-button")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")


const cmToInch = 0.393701
const literToGallon = 0.264172
const kiloToPound = 2.20462


inputEl.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        buttonEl.click()
    }
})


buttonEl.addEventListener("click", function(){
    let constantInput = inputEl.value;

    lengthEl.textContent = `${constantInput} centimeters = 
    ${(constantInput * cmToInch).toFixed(3)} inches | ${constantInput} inches = 
    ${(constantInput / cmToInch).toFixed(3)} centimeters`;

    volumeEl.textContent = `${constantInput} liters = 
    ${(constantInput * literToGallon).toFixed(3)} gallons | ${constantInput} gallons = 
    ${(constantInput / literToGallon).toFixed(3)} liters`;

    massEl.textContent = `${constantInput} kilograms = 
    ${(constantInput * kiloToPound).toFixed(3)} pounds | ${constantInput} pounds =
    ${(constantInput / kiloToPound).toFixed(3)} kilograms`;
})
