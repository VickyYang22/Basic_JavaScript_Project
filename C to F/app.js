function tocelsius(fahrenheit){
    let value = (fahrenheit-32)*5/9
   return value.toFixed(2)+ " ໍC"
}

function display(elementId,value){
    document.getElementById(elementId).innerHTML="<i>"+value+"</i>"
}

function tofahrenheit(celsius){
    let value = (celsius* 9)/5 +32
    return value.toFixed(2)+ " F"
}

let getinputC = prompt("Value of Celsius :")
alert(tocelsius(getinputC))
display("CtoF",tocelsius(getinputC))

let getinputF = prompt("Value of Fahrenheit :")
alert(tofahrenheit(getinputF))
display("FtoC",tofahrenheit(getinputF))


function sayhi(){
    return"Hi"
}
// alert(sayhi())