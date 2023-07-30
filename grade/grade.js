let score = prompt("Enter Your Score :")
if(score>=90){
    document.getElementById("result").innerHTML="<h1 style=\"color:green;\">A</h1>"
}
 
else if(score>=80){
    document.getElementById("result").innerHTML="<h1 style=\"color:lightgreen;\">B</h1>"
}

else if(score>=70){
    document.getElementById("result").innerHTML="<h1 style=\"color:lightgreen;\">C</h1>"
}

else if(score>=60){
    document.getElementById("result").innerHTML="<h1 style=\"color:blue;\">D+</h1>"
} 

else if(score>=50){
    document.getElementById("result").innerHTML="<h1 style=\"color:lightblue;\">D</h1>"
}

else{
    document.getElementById("result").innerHTML="<h1 style=\"color:red;\">F</h1>"
}
