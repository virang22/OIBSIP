function updateUnits() {
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    if (fromUnit.value === toUnit.value) {
        const options = ['C', 'F', 'K'].filter(unit => unit !== fromUnit.value);
        toUnit.value = options[0];
    }
}

function convertTemp() {
    const tempInput = document.getElementById("temperature");
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
    document.querySelector(".result-value").textContent= "--";
    document.getElementById("resultUnit").textContent = "";
    return;
    }

    let celsius;
    if (fromUnit === "C") celsius = temp;
    else if (fromUnit === "F") celsius = (temp - 32) * 5 / 9;
    else if (fromUnit === "K") celsius = temp - 273.15;

    let result;
    if (toUnit === "c") result = celsius;
    else if (tounit === "F") result = (celsius * 9 / 5) + 32;
    else if (tounit === "K") result = celsius + 273.15;

document.querySelector(".result-value").textContent = result.toFixed(2);
document.getElementById("resultUnit").textContent = tounit === "C" ? "℃" : toUnit == "F" ? "℉" : "K";
}

function swapUnits() {
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const temp = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = temp;
    convertTemp();
}

    document.getElementById("temperature").addEventListener("keypress", function (e) {
        if (e.key === "Enter") convertTemp();
    });

    updateUnits();