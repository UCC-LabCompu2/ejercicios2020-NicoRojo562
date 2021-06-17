/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method converuni
 * @param {string} id - El id de los imputs de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return |
 */

function converuni(id, valor){
    if(isNaN(valor)) {
        alert("Se ingreso un valor invalido");
    document.lasunidades.unid_metro.value ="" ;
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    } else if(id=="metro"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;
    } else if(id=="pulgada") {
        document.lasunidades.unid_metro.value = 0.0254*valor;
        document.lasunidades.unid_pie.value = 0.0833333*valor;
        document.lasunidades.unid_yarda.value = 0.0277778*valor;
    } else if(id=="yarda") {
        document.lasunidades.unid_metro.value = 0.9144*valor;
        document.lasunidades.unid_pie.value = 3*valor;
        document.lasunidades.unid_pulgada.value = 36*valor;
    } else if(id=="pie") {
        document.lasunidades.unid_pulgada.value = 12*valor;
        document.lasunidades.unid_metro.value = 0.3048*valor;
        document.lasunidades.unid_yarda.value = 0.333333*valor;
    }
}

function convergr(id){
    var grad, rad;
    if (id=="grados") {
        grad = document.getElementById( "grados").value;
        rad= (grad*Math.PI)/180;
    } else if (id=="radianes"){
        rad= document.getElementById( "radianes").value;
        grad= (rad*180)/Math.PI
    }
    document.getElementById(  "grados").value =grad;
    document.getElementById( "radianes").value =rad;
}

function mostrar_ocultar(a){

    if(a=="val_mostrar"){
        document.getElementById("DivMo").style.display='block';
    }
    else if(a=="val_ocultar"){

        document.getElementById("DivMo").style.display= 'none';
    }


}

function Suma(){

    var n1,n2;

    n1= document.getElementsByName("sum_num1")[0].value;
    n2 = document.getElementsByName("sum_num2")[0].value;

    document.getElementsByName("sum_total")[0].innerHTML= Number(n1) + Number(n2);


}

function Resta(){

    var n1,n2;

    n1= document.getElementsByName("res_num1")[0].value;
    n2 = document.getElementsByName("res_num2")[0].value;

    document.getElementsByName("res_total")[0].innerHTML= Number(n1) - Number(n2);



}

function Mul(){

    var n1,n2;

    n1= document.getElementsByName("mul_num1")[0].value;
    n2 = document.getElementsByName("mul_num2")[0].value;

    document.getElementsByName("mul_total")[0].innerHTML= Number(n1) * Number(n2);


}

function Div(){
    var n1,n2;

    n1= document.getElementsByName("div_num1")[0].value;
    n2 = document.getElementsByName("div_num2")[0].value;

    document.getElementsByName("div_total")[0].innerHTML= Number(n1) / Number(n2);


}

function Web(){

    var c,u,urlComp;

    c= document.getElementById("distancia").value;
    u=document.getElementsByName("unidades")[0].value;

    urlComp= "segundaWeb.html#" + c + "#" + u;
    window.open(urlComp);


}

function resultado(){

    var urlComp, c, u;
    urlComp= window.location.href.split("/")[5];

    c = urlComp.split("#")[1];
    u = urlComp.split("#")[2];

    document.getElementById("dist").value = c + " " + u;




}

function Dibujar(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ymax = canvas.height;
    var m=5;
    var xmax=canvas.width;
    ctx.fillStyle = "#333899";

    ctx.fillRect(0+m,ymax-40-m,40,40);
    ctx.arc(xmax/2, ymax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#000899";
    ctx.fill();



}
var bandera;
function dibujar (event){

    var canvas = document.getElementById("CanvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY =event.clientY;
    console.log(posX,posY);
    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};
    if(bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }

}

function Limpiar(){
    var  canvas = document.getElementById("CanvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width =  canvas.width;

}
function Cuadriculado(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;
    for(var i =0;i<alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.strokeStyle = "#666690"
        ctx.stroke();
        i=i+20;
    }

    ctx.beginPath();
    for(var i =0;i<alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#666690"
        ctx.stroke();
        i=i+20;
    }

    ctx.closePath();

    ctx.beginPath();
    for(var i =0;i<anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#666690"
        ctx.stroke();
        i=i+20;
    }

    ctx.closePath();

    ctx.beginPath();

    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#bf066f"
    ctx.stroke();

    ctx.closePath();

    ctx.beginPath();

    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#bf066f"
    ctx.stroke();

    ctx.closePath();


}

function DI(x,y){
    var canvas= document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(x,y);
    var img = new Image();
    img.src = "images/auto.png";
    canvas.width=canvas.width;
    img.onload=function() {

        ctx.drawImage(img, x, y);
    }
}

x=0;
dx=2;

function AA(){
    var canvas= document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width=canvas.width;

    var img = new Image();
    img.src = "images/auto.png";



    img.onload=function() {

        ctx.drawImage(img,x , 100);
    }

    x+=dx;

    if(x>canvas.width){
        x=0;
    }


}