let qrt = prompt("ຈຳນວນສິນຄ້າ")
let sum = 0
for(var i = 1; i <= qrt; i++){
    let item_price = prompt("ລາຄາສິນຄ້າທີ່"+i)
    sum = sum + parseInt (item_price)
    document.getElementById("list").innerHTML +="ລາຍການທີ່"+i+" : "+ item_price+"kip<br>"
}
document.getElementById("result").innerHTML="ລວມ : "+sum +" Kip"
