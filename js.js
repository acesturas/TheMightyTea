var orderNumber = 0;
var total = 0;
function resetlist(){
    orderNumber = 0;
    document.getElementById("order1").innerHTML = "";
    document.getElementById("order2").innerHTML = "";
    document.getElementById("order3").innerHTML = "";
    document.getElementById("order4").innerHTML = "";
    document.getElementById("order5").innerHTML = "";
    document.getElementById("quantity1").innerHTML = "";
    document.getElementById("quantity2").innerHTML = "";
    document.getElementById("quantity3").innerHTML = "";
    document.getElementById("quantity4").innerHTML = "";
    document.getElementById("quantity5").innerHTML = "";
}
function OKcar(){
    if(orderNumber < 5){
    orderNumber++;
    document.getElementById("order" + orderNumber).innerHTML = "Cream Cheese Caramel ";
    document.getElementById("quantity" + orderNumber).innerHTML = document.getElementById("qcar").value;
    document.getElementById("bprice" + orderNumber).innerHTML = document.getElementById("qcar").value * 85;
    }
}
function OKtar(){
    if(orderNumber < 5){
    orderNumber++;
    document.getElementById("order" + orderNumber).innerHTML = "Cream Cheese Taro ";
    document.getElementById("quantity" + orderNumber).innerHTML = document.getElementById("qtar").value;
    document.getElementById("bprice" + orderNumber).innerHTML = document.getElementById("qtar").value * 80;
    }
}
function OKmel(){
    if(orderNumber < 5){
    orderNumber++;
    document.getElementById("order" + orderNumber).innerHTML = "Cream Cheese Melon ";
    document.getElementById("quantity" + orderNumber).innerHTML = document.getElementById("qmel").value;
    document.getElementById("bprice" + orderNumber).innerHTML = document.getElementById("qmel").value * 90;
    }
}
function OKman(){
    if(orderNumber < 5){
    orderNumber++;
    document.getElementById("order" + orderNumber).innerHTML = "Cream Cheese Mango ";
    document.getElementById("quantity" + orderNumber).innerHTML = document.getElementById("qman").value;
    document.getElementById("bprice" + orderNumber).innerHTML = document.getElementById("qman").value * 80;
    }
}
function OKcho(){
    if(orderNumber < 5){
        orderNumber++;
        document.getElementById("order" + orderNumber).innerHTML = "Cream Cheese Chocolate ";
        document.getElementById("quantity" + orderNumber).innerHTML = document.getElementById("qcho").value;
        document.getElementById("bprice" + orderNumber).innerHTML = document.getElementById("qcho").value * 75;
    }
}
function backchoice(){
    document.getElementById("BillContainer").style.display = "none";
    document.getElementById("listed").style.display = "block";
    document.getElementById("title").innerHTML = "Promo";
}

function promo1(){
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("listed").style.display = "none";
    document.getElementById("border1").innerHTML = "Cream Cheese Caramel";
    document.getElementById("bquality1").innerHTML = "2";
    document.getElementById("bprice1").innerHTML = "250";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("db").style.display = "block";
    document.getElementById("totalvalue").innerHTML = "250";
}
function promo2(){
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("listed").style.display = "none";
    document.getElementById("border1").innerHTML = "Chocolate Mango";
    document.getElementById("bquality1").innerHTML = "3";
    document.getElementById("bprice1").innerHTML = "300";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("db").style.display = "block";
    document.getElementById("totalvalue").innerHTML = "300";
}
function promo3(){
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("listed").style.display = "none";
    document.getElementById("border1").innerHTML = "Caramel Max";
    document.getElementById("bquality1").innerHTML = "4";
    document.getElementById("bprice1").innerHTML = "420";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("db").style.display = "block";
    document.getElementById("totalvalue").innerHTML = "420";
}
function promo4(){
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("listed").style.display = "none";
    document.getElementById("border1").innerHTML = "Caramel Melon";
    document.getElementById("bquality1").innerHTML = "4";
    document.getElementById("bprice1").innerHTML = "250";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("db").style.display = "block";
    document.getElementById("totalvalue").innerHTML = "250";
}
function promo5(){
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("listed").style.display = "none";
    document.getElementById("border1").innerHTML = "Ube Chocolate";
    document.getElementById("bquality1").innerHTML = "2";
    document.getElementById("bprice1").innerHTML = "370";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("db").style.display = "block";
    document.getElementById("totalvalue").innerHTML = "370";
}
function promo6(){
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("listed").style.display = "none";
    document.getElementById("border1").innerHTML = "Max Mango";
    document.getElementById("bquality1").innerHTML = "3";
    document.getElementById("bprice1").innerHTML = "230";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("db").style.display = "block";
    document.getElementById("totalvalue").innerHTML = "230";
}
function promo7(){
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("listed").style.display = "none";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("db").style.display = "block";
    document.getElementById("bquality1").innerHTML = "2";
    document.getElementById("bprice1").innerHTML = "290";
    document.getElementById("border1").innerHTML = "Mango Chocolate";
    document.getElementById("totalvalue").innerHTML = "290";
}



function cccaramel() {
    document.getElementById("cccaramel").style.display = "block";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "bold";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function cctaro() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "block";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "bold";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function ccmelon() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "block";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "bold";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function ccmango() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "block";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "bold";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function ccchocolate() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "block";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "bold";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";

}




function updatecar(){
    document.getElementById("pricecar").innerHTML = 85 * document.getElementById("qcar").value;
}
function updatetar(){
    document.getElementById("pricetar").innerHTML = 80 * document.getElementById("qtar").value;
}
function updatemel(){
    document.getElementById("pricemel").innerHTML = 90 * document.getElementById("qmel").value;
}
function updateman(){
    document.getElementById("priceman").innerHTML = 80 * document.getElementById("qman").value;
}
function updatecho(){
    document.getElementById("pricecho").innerHTML = 75 * document.getElementById("qcho").value;
}





function done(){

    document.getElementById("MainContainer").style.display = "none";
    document.getElementById("BillContainer").style.display = "block";
    document.getElementById("back").href = "file:///C:/Users/RLF/Desktop/Subjects/2nd%20sem/2.%20(Lab)%20Introduction%20to%20Human%20Computer%20Interaction/_WEBSITE/_Midterm/featuredpage.htm";
    document.getElementById("title").innerHTML = "Bill";
    document.getElementById("done").style.display = "none";
    
    document.getElementById("border1").innerHTML = document.getElementById("order1").innerHTML;
    document.getElementById("bquality1").innerHTML = document.getElementById("quantity1").innerHTML;

    document.getElementById("border2").innerHTML = document.getElementById("order2").innerHTML;
    document.getElementById("bquality2").innerHTML = document.getElementById("quantity2").innerHTML;

    document.getElementById("border3").innerHTML = document.getElementById("order3").innerHTML;
    document.getElementById("bquality3").innerHTML = document.getElementById("quantity3").innerHTML;

    document.getElementById("border4").innerHTML = document.getElementById("order4").innerHTML;
    document.getElementById("bquality4").innerHTML = document.getElementById("quantity4").innerHTML;
    
    document.getElementById("border5").innerHTML = document.getElementById("order5").innerHTML;
    document.getElementById("bquality5").innerHTML = document.getElementById("quantity5").innerHTML;

    for(orderNumber; orderNumber > 0; orderNumber--){
        total += parseFloat(document.getElementById("bprice" + orderNumber).innerHTML)
    }

    document.getElementById("totalvalue").innerHTML = total;

    document.getElementById("newDone").style.display = "inline";
    document.getElementById("done").style.display = "none";


}


function submit(){
    
    if(document.getElementById("address").value == "0"){
        document.getElementById("ty").innerHTML = "Please Enter an Address";
    }
    document.getElementById("hidden").style.display = "block";
    document.getElementById("ty").innerHTML = "Thank You! " + document.getElementById("name").value;
    document.getElementById("boom").style.display = "inline";
    document.getElementById("SubToDone").style.display = "none";

    
}


function ccaramel() {
    document.getElementById("cccaramel").style.display = "block";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "bold";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function ctaro() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "block";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "bold";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function cmelon() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "block";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "bold";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function cmango() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "block";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "bold";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function cmax() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "block";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "bold";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";

}



function carmax() {
    document.getElementById("cccaramel").style.display = "block";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "bold";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function cartaro() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "block";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "bold";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function carme() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "block";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "bold";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function carma() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "block";
    document.getElementById("ccchocolate").style.display = "none";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "bold";
    document.getElementById("cccho").style.fontWeight = "normal";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";
    
}
function carcho() {
    document.getElementById("cccaramel").style.display = "none";
    document.getElementById("cctaro").style.display = "none";
    document.getElementById("ccmelon").style.display = "none";
    document.getElementById("ccmango").style.display = "none";
    document.getElementById("ccchocolate").style.display = "block";
    
    document.getElementById("cccar").style.fontWeight = "normal";
    document.getElementById("cctar").style.fontWeight = "normal";
    document.getElementById("ccmel").style.fontWeight = "normal";
    document.getElementById("ccman").style.fontWeight = "normal";
    document.getElementById("cccho").style.fontWeight = "bold";
    
    document.getElementById("qcar").value = "1";
    document.getElementById("qtar").value = "1";
    document.getElementById("qmel").value = "1";
    document.getElementById("qman").value = "1";
    document.getElementById("qcho").value = "1";

    document.getElementById("pricecar").innerHTML = "85";
    document.getElementById("pricetar").innerHTML = "80";
    document.getElementById("pricemel").innerHTML = "90";
    document.getElementById("priceman").innerHTML = "80";
    document.getElementById("pricecho").innerHTML = "75";

}



