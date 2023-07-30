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

}function tocelsiusPro(value){
    alert(tocelsius(value))
}

function tofahrenheitPro(value){
    alert(tofahrenheit(value))
}






