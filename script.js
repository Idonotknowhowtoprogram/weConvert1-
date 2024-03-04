var finalFahrenheit = 0;
var finalCelsius = 0;
function convertFToC (fahrenheit) { 
    let fahrenheit1 = fahrenheit-32;
    fahrenheit1/=5;
    fahrenheit1*=9;
    return fahrenheit1;
};
function convertCToF (celsius) {
    let celsius1 = celsius/5;
    celsius1*=9;
    celsius1+=32;
    return celsius1;
};
const converter = {
    gatherFahrenheit: 
        function () {
            // console.log(document.getElementById("fahrenheit"));
            return document.getElementById("fahrenheit").value;
    },
    gatherCelsius: 
        function(){
            return document.getElementById("celsius").value;
    },
    conversion: 
        function(fahrenheit,celsius) {
            fahrenheit = converter.gatherFahrenheit();
            celsius = converter.gatherCelsius();
    if (celsius=="") {
    finalFahrenheit = convertFToC(Number(fahrenheit));
    //console.log(finalFahrenheit);
    document.getElementById("celsius").value = finalFahrenheit;
    } else {
    finalCelsius = convertCToF(Number(celsius)); 
    // console.log(finalCelsius);
    document.getElementById("fahrenheit").value = finalCelsius;
    };
    }
}

function init(){
    document.getElementById("convertButton").addEventListener("click",converter.conversion)
}


window.addEventListener("load",init);

