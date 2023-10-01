//Declaring the variables globally to call it in the different functions.
var celcius = document.getElementById("cel");
var kelvin = document.getElementById("kel");
var fahrenheit = document.getElementById("fah");

//This function is to convert celcius into kelvin and fahrenhiet.
function CtoKnF() {
    var currentValue1 = parseFloat(celcius.value);
    if (!isNaN(currentValue1)) {
        fahrenheit.value = ((currentValue1 * 9 / 5) + 32).toFixed(2);// Round to 2 decimal places
        kelvin.value = ((currentValue1) + 273.15).toFixed(2);// Round to 2 decimal places
    }

}
//This function is to convert kelvin into celcius and fahrenhiet.
function KtoCnf() {
    var currentValue2 = parseFloat(kelvin.value);
    if (!isNaN(currentValue2)) {
        celcius.value = (currentValue2 - 273.15).toFixed(2); // Round to 2 decimal places
        fahrenheit.value = ((currentValue2 - 273.15) * 9 / 5 + 32).toFixed(2); // Round to 2 decimal places
    }

}
//This function is to convert fahrenhiet into celcius and kelvin.
function FtoCnK(){
    var currentValue3 = parseFloat(fahrenheit.value);
    if (!isNaN(currentValue3)) {
        celcius.value = ((currentValue3 - 32) * 5 / 9).toFixed(2);// Round to 2 decimal places
        kelvin.value = ((currentValue3 - 32) * 5 / 9 + 273.15).toFixed(2);// Round to 2 decimal places

    }
}

