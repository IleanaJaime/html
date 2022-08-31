const divmedidor = document.getElementById ("medidor")



let condicion

do { 
    let dato = parseFloat(prompt("Ingrese aqui la maxima (primeros dos digitos) y minima (primeros dos digitos) de su presion arterial, sin espacios o simbolos"))
    MedidorPresion(dato)
    condicion = confirm ("¿Quieres volver a calcular tu presion arterial?")
}while(condicion)

function MedidorPresion(presion){

        if(presion <= 1280 ){
    alert("Su presion es Optima baja, consulte a su medico")
}
    else if(presion >= 1281 && presion <= 1284){
        alert("Su presion es Normal")
} 
    else if(presion >= 1385 && presion <= 1389){
        alert("Su presion es Normal Alta")
} 
    else if(presion >= 1490 && presion <= 1499){
        alert("Hipertension LEVE, consulte a su medico")
} 
    else if(presion >= 1590 && presion <= 1599){
        alert("Hipertension LEVE, consulte a su medico")
} 
    else if(presion >= 1610 && presion <= 1619){
        alert("Hipertension MODERADA, consulte a su medico")
} 
    else if(presion >= 1710 && presion <= 1719){
        alert("Hipertension MODERADA, consulte a su medico")
} 
    else if(presion >= 1811 && presion <= 1820){
        alert("Hipertension SEVERA, consulte a su medico con URGENCIA")
}
    else{
        alert("No valido, vuelve a intentar")
}
}
Swal.fire({
    icon: 'info',
    title: 'DESEAS MEDIR TU PRESION ARTERIAL?',
    text: 'Segui los siguientes pasos y calcula tu presion! ',
})