// while(prompt("ຖ້າຈະອອກໃຫ້ພີມ Exit")!="Exit"){
//     document.getElementById("loop").innerHTML+="ບໍໄດ້ພີມ Exit <br>"
// }

function sayhi(userName,userLastName){
    return "What up " + userName +" "+ userLastName
}
function age(userage){
    return userage
}
let userinput = prompt("input Your Name :")
let userLastNameinput = prompt("input Your LastName :")
let ageinput = prompt("input Your Age :")
alert(sayhi(userinput,userLastNameinput))
alert(age(ageinput))

// alert(age()+10)