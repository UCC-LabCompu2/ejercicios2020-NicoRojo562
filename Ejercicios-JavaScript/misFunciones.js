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
        grad = document.getElementById( elementId: "grados").value;
        rad= (grad*Math.PI)/180;
    } else if (id=="radianes"){
        rad= document.getElementById(elementId: "radianes").value;
        grad= (rad*180)/Math.PI
    }
    document.getElementById( elementId: "grados").value =grad;
    document.getElementById( elementId: "radianes").value =rad;
}