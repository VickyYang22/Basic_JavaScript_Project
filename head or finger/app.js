let round = prompt("How many game will you play?")
var pass = 0
for(var i = 1;i<=round;i++){
    var choose = prompt("Choose Head or Tail?")
    var random =""
    var sum = sum + parseInt(choose)
    if((Math.floor(Math.random()*10))<=4){
        random="ຫົວ"
        
    }
    else{
        random="ກ້ອຍ"
        
    }
var correct=choose==random
    if(correct){
        alert("You win!!!!")
        for( var a=1;a<=correct;a++){
            pass = pass + parseInt(correct) 
        }

    }
    else{
        alert("You Lose!")
    }
    document.getElementById("gamelist").innerHTML += "ຄັ້ງທີ່ "+i +"ອອກ :"+ random + "= ເຈົ້າເລືອກ " +choose +"<br>"
}
    document.getElementById("all").innerHTML = "ລວມ "+ (i-1) + "ຄັ້ງ ຖືກ =" + pass