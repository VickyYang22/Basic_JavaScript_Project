// console.log("hello")
// var name = "Vicky" + "Yang"
// console.log(name)
// var age = 10 +20
// console.log(age)
// {
//     var x = 2
//     let y = 22
//     alert(y)
// }

// var x = 20
// {
//     var x = 100
//     let y = 15
// }
// console.log(x)

let number = prompt("Enter your Number : ")
// console.log(number)99
document.write("ເລກທີ່ທ່ານຊື້ = " +number)
// console.log (Math.floor(Math.random()*100)) ສູດRandom ເລກ
let random = document.getElementById("random").innerHTML = Math.floor(Math.random()*2)

// console.log(3=="3")
if(random == number){
    document.getElementById("result").innerHTML="congratulations!!!<br> You Win!!!"
}

else{
    document.getElementById("result").innerHTML="So Sorry I Get Your Money!!!"
}