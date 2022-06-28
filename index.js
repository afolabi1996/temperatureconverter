
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var msg1 = document.querySelector('.msg1');
var msg2 = document.querySelector('.msg2');
var reset = document.querySelector('#reset');

btn1.addEventListener('click', function kelvinToCels(){
    if(input1.value == 0){
        msg1.textContent = "please enter a number";
    } else {
        var x = input1.value = Number(input1.value) - 273-15;
        msg1.textContent = "converted temperature from kelvin is " + x.toFixed(2) + " C."
        input1.value = " ";
    }
});

btn2.addEventListener('click', function celsToKelv(){
if(input2.value == 0){
    msg2.textContent = "please enter a number";
} else {
    var x = input2.value = Number(input2.value) - 273.15;
    msg2.textContent = "Converted temperature from celsius " + x.toFixed(2) + " K."
    input2.value = " ";
}
});

reset.addEventListener('click', function reset(){
    msg1.textContent = "";
    msg2.textContent = "";
});